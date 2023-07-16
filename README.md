# Livraria_Java_React

Livraria em construção, com as funções de ler todos os livros e cadastrar novo livro.

## Pendências
<ul>
<li>A função de deletar somente apaga os livros do frontend, ainda falta implementar o endpoint de exclusão e a respectiva conexão;</li>

<li> A função de alterar um livro também ainda não foi implementada;
</li>

<li> Ainda pretendo estilizar e adicionar novas funcionalidades.
</li>

</ul>

## Detalhes

Eu usei um banco de dados local, com PostgreSQL. Para rodar é necessário configurar uma tabela mais ou menos assim:

    "CREATE TABLE livros(
        id SERIAL PRIMARY KEY,
        titulo VARCHAR(100) NOT NULL,
        autor VARCHAR(100) NOT NULL,
        ano_publicacao INTEGER,
        editora VARCHAR(100),
        numero_paginas INTEGER
        );"

É preciso ajustar o nome do usuário e senha, e talvez outras configurações.

## Endpoints java 

        localhost:5000/booksList -> contém a tabela inteira;
        localhost:5000/addBooks -> Recebe um novo objeto para inserir na tabela.

## Versões

psql (PostgreSQL) 14.8;

NPM version 8.19.3;

Oracle openJDK version 19.0.2.
