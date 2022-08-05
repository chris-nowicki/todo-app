import React, {useRef} from 'react'
import styles from './TodoList.module.css'
import {v4} from 'uuid' // generates a unique id

const TodoList = (props) => {
    const {todos, setTodos} = props;
    
    // declare usRef variable
    const newTodoRef = useRef();

    // add new task to the todo list
    const handleAddTodo = (e) => {
        // assign name to the value of the new task name
        const name = newTodoRef.current.value;
        
        // ensure user cannot enter a blank task
        if (name === '') return

        // add task to the existing list of todos
        setTodos([...todos, {id: v4(), name: name, complete: false }])
        
        // reset the input field for new task
        newTodoRef.current.value = null;
    }
    
    return (
        // add new task input and submit
        <div className="flex flex-col items-center mt-10">
            <div className="flex flex-row justify-center w-full">
                
                {/* new to do input field w/ newTodoRef from useRef assigned */}
                <input type="text" ref={newTodoRef} className="rounded-md mr-3 w-1/2 text-xl shadow-md"/>

                {/* add button routes to handAddTodo function */}
                <div className={`flex flex-row items-center justify-center ${styles.btn} text-3xl shadow-md`} onClick={(e) => handleAddTodo(e)}>
                    Add Task
                </div>
            </div>

            {/* display the to do list */}
            <div className="flex flex-col mt-10 justify-center w-3/4">
                
                {/* iterate through the map of the todo list and display each task */}
                {
                    todos.map((todo) => (
                        <div key={todo.id} className="flex flex-row w-full mt-2">
                            
                            {/* display the todo */}
                            <span className="w-full border-b-2 border-black text-lg">{todo.name}</span>
                            
                            {/* display checkbox */}
                            <input type="checkbox" name="name" id="name" className='ml-4 w-5 h-5 mt-2' checked={todo.complete} />
                            
                            {/* display delete icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-4 mt-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TodoList