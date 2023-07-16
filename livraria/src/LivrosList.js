import React, { useEffect, useState } from 'react';
import LivroForm from './LivroForm';
const TodoList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await fetch('http://localhost:5000/booksList'); 

        if (response.ok) {
          const data = await response.json();
          setBooks(data);
        } else {
          console.error('Error occurred while fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error occurred while making the request:', error);
      }
    };

    fetchBooks();
  }, []);

  const handleNewBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  const handleDeleteBook = (titulo) => {
    const updatedBooks = books.filter(item => item.titulo !== titulo);
    setBooks(updatedBooks);
    console.log(updatedBooks);
  };



  return (
    <div>
      <div className='form'>
      <LivroForm onNewBook={handleNewBook} existingNames={books} />
      </div>
      

      <h1>Livros</h1>
      <div className='books__container'>
        {books.map((book) => (
          <div key={book.titulo}>
            <p>Nome: {book.titulo}</p>
            <p>Autor: {book.autor}</p>
            <p>Editora: {book.editora}</p>
            <p>Ano de publicação: {book.anoPublicacao}</p>
            <p>Número de páginas: {book.numeroPaginas}</p>
            <button onClick={() => handleDeleteBook(book.titulo)}>Apagar</button>
            </div>
        ))}
      </div>
      </div>
  );
};

export default TodoList;
