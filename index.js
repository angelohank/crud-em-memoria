import express from "express";

const app = express();
app.use(express.json());

let ultimoId = 1;

const usuario_admin = {
  id: ultimoId,
  nome: "admin",
  email: "admin@admin",
};

let usuarios = [usuario_admin];

app.get("/usuarios", (req, res) => {
  res.json(usuarios).status(200);
});

app.post("/usuarios", (req, res) => {
  const { nome, email } = req.body;

  if (!nome || !email) {
    return res.status(400).json({ mensagem: "Nome e email são obrigatórios" });
  }

  const novoUsuario = {
    nome: nome,
    email: email,
    id: ultimoId + 1,
  };

  usuarios.push(novoUsuario);
  ultimoId += 1;

  res.status(201).json(novoUsuario.id);
});

app.delete("/usuarios/:id", (req, res) => {
  const id = req.params.id;
  const idNumerico = parseInt(id);

  if (isNaN(idNumerico)) {
    return res
      .status(400)
      .json({ mensagem: "ID inválido, precisa ser um numero" });
  }

  let posicao_do_usuario = usuarios.findIndex(
    (usuario) => usuario.id === idNumerico
  );

  if (posicao_do_usuario === -1) {
    return res.status(404).json({ mensagem: "Usuario nao encontrado" });
  }

  usuarios.splice(posicao_do_usuario, 1);
  res.status(204).send();
});

app.listen(3000);

/*
deletar

precisa do id do usuario a ser deletado
 - transformar o id de string para numero
 - se o id for invalido, retornar 400
 - verificar se o usuario existe -> findIndex
 - se nao existir, retornar 404
 - se existir, deletar -> splice
 - retornar 204 - no content 
*/

/*
atualizar

precisa do id do usuario a ser atualizado
transformar o id de string para numero
se o id for invalido, retorna 400

procurar o usuario dentro do array -> find
se nao encontrar, retornar 404

precisa dos dados para atualizar (nome ou email)
pegar os dados do body (igual o create)
se nao tiver nenhum dos dados que precisamos, retornar 400

caso tenha email, verificar se ja nao existe outro usuario com esse email -> some
caso exista, retornar 409 - conflito

dando tudo certo
nome do usuario recebe o novo nome (se tiver)
email do usuario recebe o novo email (se tiver)
retornar 200 - ok com o usuario atualizado

*/

/**
 * CRUD em memória

 * criar uma rota para deletar um usuario
 * criar uma rota pra atulizar um usuario
 */
