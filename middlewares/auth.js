export function verifyUser(req, res, next) {
  console.log("passei no middleware");

  const headers = req.headers;

  const auth = req.headers.authorization;

  //verificar o tipo do token
  if (!auth.startsWith("Basic")) {
    return res.status(400).json({ message: "token precisa ser basic" });
  }

  //pegar conteudo encriptado
  const conteudo_do_token = auth.split(" ")[1];
  console.log(conteudo_do_token);

  //desencriptar o conteudo
  const token_descriptografado = Buffer.from(
    conteudo_do_token,
    "base64"
  ).toString();

  console.log(token_descriptografado);

  //tendo usuario e senha
  const usuario = token_descriptografado.split(":")[0];

  //preciso verificar se o usuario existe no banco

  //se nao existe, nao pode acessar
}
