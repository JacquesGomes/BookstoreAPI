import React from 'react';
import './App.css';
import LivrosList from './LivrosList';

const App = () => {

  return (
    <div className='App'>
    <div className='logo'>
      <div className='logo__content'><h1>LIVRARIA</h1></div>
    </div>
    <div className='container'>
      <LivrosList  />
    </div>
    </div>
  );
};

export default App;
