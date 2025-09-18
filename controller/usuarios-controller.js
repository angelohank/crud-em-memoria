import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

let ultimoId = 1;

const usuario_admin = {
  id: ultimoId,
  nome: "admin",
  email: "admin@admin",
};

let usuarios = [usuario_admin];

async function listarTodosOsUsuarios(req, res) {
  try {
    const usuarios_do_banco = await prisma.users.findMany();

    res.status(200).json(usuarios_do_banco);
  } catch (erro) {
    console.log(erro);
  }
}

async function criarUsuario(req, res) {
  const { nome, email, idade } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
  }

  const novoUsuario = {
    nome: nome,
    email: email,
    idade: idade,
  };

  const criarUser = await prisma.users.create({
    data: novoUsuario,
  });

  res.status(201).json(criarUser);
}

async function deletarUsuario(req, res) {
  const id = parseInt(req.params.id);
  if (isNaN(id)) {
    return res
      .status(400)
      .json({ message: "parametro precisa ser um inteiro" });
  }
  try {
    await prisma.users.delete({ where: { id: id } });
  } catch (erro) {
    console.log(erro.message);
  }

  res.status(204).send();
}

async function alterarUsuario(req, res) {
  const id = parseInt(req.params.id);

  if (isNaN(id)) {
    return res
      .status(400)
      .json({ mensagem: "ID inválido, precisa ser um numero" });
  }

  const { nome, email, idade } = req.body;
  //TEM QUE ESTAR EM UM TRY CATCH
  await prisma.users.update({
    where: { id: id },
    data: {
      nome: nome,
      email: email,
      idade: idade,
    },
  });
  res.status(204).send();
}

async function buscarPeloId(req, res) {
  const id = parseInt(req.params.id);
  const usuario = await prisma.users.findUnique({ where: { id: id } });
  res.status(200).json(usuario);
}

export {
  listarTodosOsUsuarios,
  criarUsuario,
  deletarUsuario,
  alterarUsuario,
  buscarPeloId,
};
