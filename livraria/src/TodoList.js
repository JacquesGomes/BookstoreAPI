import React, { useEffect, useState } from 'react';
import TodoForm from './TodoForm';
const TodoList = () => {
  const [todoItems, setTodoItems] = useState([]);

  useEffect(() => {
    const fetchTodoItems = async () => {
      try {
        const response = await fetch('http://localhost:5000/usersList'); // Replace with your endpoint URL
        if (response.ok) {
          const data = await response.json();
          setTodoItems(data);
        } else {
          console.error('Error occurred while fetching data:', response.status);
        }
      } catch (error) {
        console.error('Error occurred while making the request:', error);
      }
    };

    fetchTodoItems();
  }, []);

  const handleNewTodoItem = (newTodoItem) => {
    setTodoItems([...todoItems, newTodoItem]);
  };

  const handleDeleteTodoItem = (name) => {

    
    const updatedTodoItems = todoItems.filter(item => item.name !== name);
    setTodoItems(updatedTodoItems);
    console.log(updatedTodoItems);
  };



  return (
    <div>

      <TodoForm onNewTodoItem={handleNewTodoItem} existingNames={todoItems} />

      <h1>Todo List</h1>
      <ul>
        {todoItems.map((todoItem) => (
          <li key={todoItem.email}>
            <p>Name: {todoItem.name}</p>
            <p>Email: {todoItem.email}</p>
            <button onClick={() => handleDeleteTodoItem(todoItem.name)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
