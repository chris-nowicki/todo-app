import React, { useRef } from 'react'
import styles from './TodoList.module.css'
import {v4} from 'uuid' // generates a unique id
import Todo from './Todo'

const TodoList = (props) => {
    const {todos, setTodos, STORAGE_KEY, filteredTodos} = props;

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

        // reset the new task input field
        newTodoRef.current.value = null;
    }

    // toggles task complete/not-complete
    const toggleTodo = (id) => {
        const newTodoList = [...todos];
        const todo = newTodoList.find(todo => todo.id === id);
        todo.complete = !todo.complete;
        setTodos(newTodoList);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(newTodoList))
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
        <div className="flex flex-col items-center mt-10 sm:w-4/5 lg:w-1/2">
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
                    
                    filteredTodos.map((todo) => (
                        <Todo key={ todo.id } todo = { todo } toggleTodo = { toggleTodo } handleTaskDelete = { handleTaskDelete } />
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList