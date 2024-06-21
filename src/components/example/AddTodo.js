// AddTodo.js
import React, { useState } from 'react';
import './AddTodo.css'

function AddTodo({ addTodo }) {
  const [text, setText] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) return;
    addTodo(text);
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className='todo-add'> 
      <input
        type="text"
        placeholder="Add a new task"
        value={text}
        onChange={(e) => setText(e.target.value)} className='todo-input'
      />
      <button type="submit" className='todo-add-btn'>Add</button>
    </form>
  );
}

export default AddTodo;
