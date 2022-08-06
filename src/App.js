import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

const STORAGE_KEY = 'todoApp'

function App() {
const [todos, setTodos]= useState([])

useEffect(() => {   
  const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
      console.log(storedTodos)
      setTodos(storedTodos)
},[])

  return (
    <div className="container mx-auto w-2/4">
      <Header />
      <Menu todos = { todos }/>
      <TodoList todos = { todos } setTodos = { setTodos } STORAGE_KEY = {STORAGE_KEY} />
    </div>
  );
}

export default App;