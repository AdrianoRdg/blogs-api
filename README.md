# Blogs API Project

API de um blog que permite cadastrar usuários,  logar, criar posts, edita-los e deletar usuários e posts, projeto feito utilizando JavaScript com sequelize, uma ORM para mapear o banco de dados.

## Tecnologias utilizadas

- NodeJS
- Sequelize
- MySQL
- Express
- Jsonwebtoken
- Joi

## Pré-requisitos

O projeto utiliza versão do Node 16 ou superior, porém pode ser executado via Docker.

## Orientações

Clone o projeto

```
git clone git@github.com:AdrianoRdg/store-manager.git

```

Entre na pasta do projeto

```
cd store-manager/
```

Após realizar o clone, existem duas maneiras de rodar o projeto, via docker e localmente na maquina.

## Utilização de variáveis de ambiente

Na raiz do projeto existe um arquivo chamado .env.exemple, renomeie-o para .env e configure as variáveis de ambiente

```
#### SERVER VARS
NODE_ENV=development
API_PORT=3000

#### DATABASE VARS
MYSQL_HOST=localhost
MYSQL_PORT=3306
MYSQL_DB_NAME=blogs-api
MYSQL_USER=root
MYSQL_PASSWORD=password

#### SECRECT VARS
JWT_SECRET=trybe

```

## Comandos importantes

Após a configuração de variáveis de ambiente, temos os seguintes comandos

- `npm start` // Inicia a API
- `npm test` // Roda os testes unitários

## Rotas da API
