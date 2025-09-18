# CRUD em Memória

Este projeto foi desenvolvido para o curso **Aprender e Crescer** com o objetivo de ensinar as operações básicas de gerenciamento de dados: **Criação, Leitura, Atualização e Deleção (CRUD)**.

---

## 📌 Contexto

- Inicialmente, a aplicação utilizava um **array em memória** como "banco de dados", com foco em exercitar os métodos dos arrays.  
- Posteriormente, foi integrada ao **SQLite**, permitindo trabalhar com banco de dados real.  
- As rotas seguem o padrão **REST**.

### Endpoints

**POST**
`/usuarios` <br>
Criação de um novo usuário
Body request (JSON)
```
{
  "nome": "john doo",
  "email": "johndoo@email.com"
}
```

**GET**
`/usuarios` <br>
Retorna todos os usuários
Response (JSON)
```
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
]
```

**GET**
`/usuarios` <br>
Retorna usuário pelo id
Response (JSON)
```
[
  {
    "id": 1,
    "nome": "João Silva",
    "email": "joao@email.com"
  }
]
```

**PATCH**
`/usuarios` <br>
Altera as informações do usuário com o id informado
Body request (JSON)
```
{
  "nome": "Maria Souza"
}

OU

{
  "email": "MariaSouza@email.com"
}
```

**DELETE**
`/usuarios` <br>
Remove o usuário com o id informado
Response (JSON)
```
{
  "mensagem": "Usuário deletado com sucesso"
}
```

<hr>

### Tecnologias utilizadas

- NodeJs
- Express
- SQLite
- Prisma ORM
