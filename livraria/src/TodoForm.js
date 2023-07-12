import React, { useState } from 'react';

const TodoForm = ({ onNewTodoItem, existingNames }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isNameValid, setIsNameValid] = useState(true);


  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if the name already exists in the list
    if (existingNames.some(item => item.name === name)) {
      setIsNameValid(false);
      alert("Nome já existe");
      return; // Exit the function early if the name is not valid
    }

    console.log(existingNames);

    const newTodoItem = {
      name: name,
      email: email
    };

    try {
      const response = await fetch('http://localhost:5000/addUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newTodoItem)
      });

      if (response.ok) {
        // Todo item added successfully
        console.log('Todo item added successfully');
        
      } else {
        // Error occurred while adding todo item
        console.log('Error occurred while adding todo item');
      }
    } catch (error) {
      console.error('Error occurred while making the request:', error);
    }

  
    onNewTodoItem(newTodoItem);

    // Clear the form inputs
    setName('');
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit">Add Todo</button>
    </form>
  );
};

export default TodoForm;
