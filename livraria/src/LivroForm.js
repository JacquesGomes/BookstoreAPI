import React, { useState } from 'react';
import './Form.css';

const LivroForm = ({ onNewBook, existingNames }) => {
  const [titulo, setTitulo] = useState('');
  const [autor, setAutor] = useState('');
  const [ano_publicacao, setAno] = useState('');
  const [editora, setEditora] = useState('');
  const [numeros_paginas, setPaginas] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the name already exists in the list
    if (existingNames.some(item => item.titulo === titulo)) {
      setIsNameValid(false);
      alert("Um livro com esse nome já foi cadastrado.");
      return; // Exit the function early if the name is not valid
    }

    console.log(existingNames);

    const newLivro = {
      titulo: titulo,
      autor: autor,
      anoPublicacao: ano_publicacao,
      editora: editora,
      numeroPaginas: numeros_paginas
    };

    console.log(newLivro);

    try {
      const response = await fetch('http://localhost:5000/addBook', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newLivro)
      });

      if (response.ok) {
        // Todo item added successfully
        console.log('Book added successfully');
        
      } else {
        // Error occurred while adding todo item
        console.log('Error occurred while adding a book');
      }
    } catch (error) {
      console.error('Error occurred while making the request:', error);
    }

  
    onNewBook(newLivro);

    // Clear the form inputs
    setTitulo('');
    setAutor('');
    setAno('');
    setEditora('');
    setPaginas('');
    
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Título"
        value={titulo}
        onChange={(e) => setTitulo(e.target.value)}
      />
      <input
        type="text"
        placeholder="Autor"
        value={autor}
        onChange={(e) => setAutor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Ano de publicação"
        value={ano_publicacao}
        onChange={(e) => setAno(e.target.value)}
      />
      <input
        type="text"
        placeholder="Editora"
        value={editora}
        onChange={(e) => setEditora(e.target.value)}
      />
      <input
        type="text"
        placeholder="Número de páginas"
        value={numeros_paginas}
        onChange={(e) => setPaginas(e.target.value)}
      />

      <button type="submit">Adicionar livro</button>
    </form>
  );
};

export default LivroForm;
