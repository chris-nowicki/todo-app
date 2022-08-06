import React, { useRef } from 'react'
import styles from './TodoList.module.css'
import {v4} from 'uuid' // generates a unique id

const TodoList = (props) => {
    const {todos, setTodos, STORAGE_KEY} = props;

    // declare usRef variable
    const newTodoRef = useRef();

    // add new task to the todo list
    const handleAddTodo = () => {
        // assign name to the value of the new task name
        const name = newTodoRef.current.value;
        
        // ensure user cannot enter a blank task
        if (name === '') return

        // add task to the existing list of todos
        const newTodos = [...todos, {id: v4(), name: name, complete: false }]
        setTodos(newTodos)

        // add todos to local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))

        // reset the input field for new task
        newTodoRef.current.value = null;
    }

    // toggles complete/not-complete for a specific task
    const toggleTodo = (id) => {
        const newTodoList = [...todos];
        const todo = newTodoList.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodoList);
    }

    // deletes task
    const handleTaskDelete = (id) => {
        const newTodos = todos.filter(todos => todos.id !== id)
        setTodos(newTodos)

        // update list of todos in local storage
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodos))
    }

    return (
        // add new task input and submit
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-row justify-center w-full">
                
                {/* new to do input field w/ newTodoRef from useRef assigned */}
                <input type="text" ref={newTodoRef} className="rounded-md mr-3 w-1/2 text-xl shadow-md"/>

                {/* add button routes to handAddTodo function */}
                <div className={`flex flex-row items-center justify-center ${styles.btn} text-3xl shadow-md`} onClick={() => handleAddTodo()}>
                    Add Task
                </div>
            </div>

            {/* display the to do list */}
            <div className="flex flex-col mt-10 justify-center w-3/4">
                
                {/* iterate through the map of the todo list and display each task */}
                {
                    todos.map((todo) => (
                        <div key={todo.id} className="flex flex-row w-full mt-2">
                            {/* <label className="w-full"> */}
                                <div className="flex flex-row w-full">
                                        {/* display the todo */}
                                        <span  
                                            className={
                                                `w-full border-b-2 border-black text-lg 
                                                ${
                                                    todo.complete ? 'line-through' : ''
                                                }
                                            `} >
                                            {todo.name}
                                        </span>
                                        
                                        {/* display checkbox */}
                                        <input type="checkbox" className="ml-4 w-5 h-5 mt-2" checked={todo.complete} onChange={() => toggleTodo(todo.id)}/>
                                </div>
                            
                            {/* display delete icon */}
                            <div className="cursor-pointer" onClick={() => handleTaskDelete(todo.id)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-2 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList