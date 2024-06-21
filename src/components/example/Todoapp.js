// App.js
import React, { useState } from 'react';
import TodoList from './TodoList';
import AddTodo from './AddTodo';
import './Todoapp.css'
function TodoApp() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { text }]);
  };

  const completeTodo = (index) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  };

  const removeTodo = (index) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  return (
    <div className="App-main">
        <div>
        <h1>To-Do List</h1>
      <AddTodo addTodo={addTodo} />
      <TodoList
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
        </div>
      
    </div>
  );
}

export default TodoApp;
