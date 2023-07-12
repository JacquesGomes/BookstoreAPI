# CRUD_Java_React

CRUD em construção, com as funções de ler todos os usuários e cadastrar novo usuário. Fiz esse projeto com IntelliJ para o Java e VScode para o React.

## Pendências
<ul>
<li>A função de deletar somente apaga os usuários do frontend, ainda falta implementar o endpoint de exclusão e a respectiva conexão;</li>

<li> A função de alterar um usuário também ainda não foi implementada.
</li>

</ul>

## Detalhes

Eu usei um banco de dados local, com PostgreSQL. Para rodar é necessário configurar uma tabela com id, name e email, mais ou menos assim:

    "CREATE TABLE users (
        id SERIAL PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100)
    );"

É preciso ajustar o nome do usuário e senha, e talvez outras configurações.

## Endpoints java 

        localhost:5000/usersList -> contém a tabela inteira;
        localhost:5000/addUser -> Recebe um novo objeto para inserir na tabela.

## Versões

psql (PostgreSQL) 14.8;

NPM version 8.19.3;

Oracle openJDK version 19.0.2.
