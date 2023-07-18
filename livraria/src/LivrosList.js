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
    <div className='form__list'>
      <div className='form'>
      <h2>Cadastrar livro</h2>
      <LivroForm onNewBook={handleNewBook} existingNames={books} />
      </div>
      
      <div className='books__background'>
      <h2>Livros cadastrados</h2>
      <div className='books__container'>
        {books.map((book) => (
          <div key={book.titulo} className='book'>
          <div className='book__icons'>
          <h3>{book.titulo}</h3>
          <div>
          <button onClick={() => handleDeleteBook(book.titulo)}><i class="uil uil-edit"></i></button>
          <button onClick={() => handleDeleteBook(book.titulo)}><i class="uil uil-times"></i></button>
          </div>
          </div>
            
            <p>Autor: {book.autor}</p>
            <p>Editora: {book.editora}</p>
            <p>Ano de publicação: {book.anoPublicacao}</p>
            <p>Número de páginas: {book.numeroPaginas}</p>
            </div>
        ))}
      </div>
      </div>
      </div>
  );
};

export default TodoList;
