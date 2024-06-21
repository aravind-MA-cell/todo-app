// TodoList.js
import React from 'react';
import './TodoList.css'

function TodoList({ todos, completeTodo, removeTodo }) {
  return (
    <div className='todoitems'>
       <ul className='todoitems-container'>
      {todos.map((todo, index) => (
        <li key={index} className='todoitems-text'>
          <span style={{ textDecoration: todo.isCompleted ? 'line-through' : 'none' }} className='Text-inner'>
            {todo.text}
          </span>
          <button onClick={() => completeTodo(index)} >Complete</button>
          <button onClick={() => removeTodo(index)}>Delete</button>
        </li>
      ))}
    </ul>
    </div>
   
  );
}

export default TodoList;
