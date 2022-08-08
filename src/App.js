import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Menu from './components/Menu';
import TodoList from './components/TodoList';

const STORAGE_KEY = 'todoApp'

function App() {
  // states
  const [todos, setTodos]= useState([])
  const [status, setStatus] = useState('all')
  const [filteredTodos, setFilteredTodos] = useState([])

  // effect - loads stored todos in localstorage upon page refresh
  // only loads data on first page reload
  useEffect(() => {   
    const storedTodos = JSON.parse(localStorage.getItem(STORAGE_KEY))
    setTodos(storedTodos)
  },[])

  // effect - updates the filteredTodos based on state when todos or status changes
  useEffect(() => {  
    switch(status){
      case 'completed':
        setFilteredTodos(todos.filter(todo => todo.complete === true))
        break;
      case 'uncompleted':
        setFilteredTodos(todos.filter(todo => todo.complete === false))
        break;
      default:
        setFilteredTodos(todos)
        break;
    }
  },[todos, status])

  return (
    <div className="flex flex-col items-center">
      <Header />
      <Menu todos = { todos } setStatus = { setStatus }/>
      <TodoList 
        todos = { todos } 
        setTodos = { setTodos } 
        STORAGE_KEY = {STORAGE_KEY} 
        filteredTodos = { filteredTodos }
      />
    </div>
  );
}

export default App;