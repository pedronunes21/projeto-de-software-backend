
# Trabalho de Projeto de Software | BACKEND

Uma API em Node para um sistema de academia de Crossfit.



## Rotas

#### Lista todos os usuários cadastrados
```http
  GET /users
```

#### Cadastra um usuário
```http
  POST /register
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário a ser cadastrado |
| `password` | `string` | **Obrigatório**. Senha do usuário a ser cadastrado |
| `name` | `string` | **Obrigatório**. Nome do usuário |
| `photoURL` | `string` | URL para foto de perfil |
| `permission` | `string` | **Obrigatório**. Permissão. Se o usuário é um administrador |

#### Login de um usuário
```http
  POST /login
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `email` | `string` | **Obrigatório**. Email do usuário |
| `password` | `string` | **Obrigatório**. Senha do usuário |

#### Validação do Token JWT
```http
  POST /token/validate
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `token` | `string` | **Obrigatório**. Token a ser validado |

#### Cria uma academia
```http
  POST /gym/create
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `name` | `string` | **Obrigatório**. Nome da Academia |
| `address` | `string` | **Obrigatório**. Endereço da Academia |
| `description` | `string` | **Obrigatório**. Descrição da Academia |

#### Cria um Treino
```http
  POST /training/create
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `category` | `string` | **Obrigatório**. Categoria do Treino |
| `gymId [FK]` | `string` | **Obrigatório**. Id da academia que o treino será adicionado |
| `description` | `string` | **Obrigatório**. Descrição do Treino |

#### Faz matrícula em uma academia
```http
  POST /subscription/create
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `userId [FK]` | `string` | **Obrigatório**. Id do usuário a ser matriculado |
| `gymId [FK]` | `string` | **Obrigatório**. Id da academia que o usuário se matriculará |

#### Cria uma aula
```http
  POST /lesson/create
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `trainingId [FK]` | `string` | **Obrigatório**. Id do treino |
| `gymId [FK]` | `string` | **Obrigatório**. Id da academia |
| `maxUsers` | `integer` | **Obrigatório**. Máximo de usuários que podem participar da aula |
| `time` | `string` | **Obrigatório**. Hora da aula. ex: "9:30", "21:05" |
| `title` | `string` | **Obrigatório**. Título da aula |
| `weekDay` | `integer` | **Obrigatório**. Número de 0 a 6 correspondente aos dias da semana |



## Instalação

Para instalar todas as bibliotecas

```bash
  npm install
```
Para inicializar a API
```bash
  npm run dev
```
Para que a aplicação funcione, deve-se ter instalado o banco de dados PostgreSQL.

Além disso, as credenciais do banco devem ser alteradas no arquivo ./src/data-source.ts.

Por último, deve-se criar uma variável de ambiente no arquivo .env com a chave JWT_SECRET_KEY, com qualquer valor.
    
## Funcionalidades

- Cadastro dos dados no Banco de Dados PostgreSQL
- Tratamento de erros
- Separação do código em Controllers e Services
- Encriptação da senha antes de ser salva


## Stack utilizada

* Cors
* UUID
* Bcrypt
* Dotenv
* Express
* TypeORM
* Pg (Postgres)
* Json Web Token
* Reflect Metadata

## Anotações
* Tirei as validações da senha.
* Precisa de um middleware nas rotas privadas (criar treino, criar academia)
* Pode mais de um treinador por aula?
* Se tem mais de uma academia, usuário tem que fazer matrícula? Se sim precisa de uma tabela para matrícula, se não não pode ter mais de uma academia.
* Criar uma tabela de permissões com userId e gymId, para saber se o usuário tem permissão naquela academia
* Falta adicionar treinador na aula
* Criar uma tabela para treinadores, para que uma aula possa ter mais de um treinador




