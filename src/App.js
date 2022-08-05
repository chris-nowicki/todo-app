import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

function App() {
const [todos, setTodos]= useState([])

  return (
    <div className="container mx-auto w-2/4">
      <Header />
      <Menu todos = { todos }/>
      <TodoList todos = { todos } setTodos = { setTodos } />
    </div>
  );
}

export default App;