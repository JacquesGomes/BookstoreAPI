import React from 'react';
import './App.css';
import LivrosList from './LivrosList';

const App = () => {

  return (
    <div className='App'>
    <div className='container'>
      <h1>Livraria</h1>

      <LivrosList  />
    </div>
    </div>
  );
};

export default App;
