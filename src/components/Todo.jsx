import React from 'react'
import './Todo.module.css'

function Todo({todo, toggleTodo, handleTaskDelete}) {
    return (
    <div className="flex flex-row w-full mt-4">
        <div className="flex flex-row w-full">
            {/* display the todo */}
            <span  
                className={
                    `w-full border-b-2 border-black text-lg mr-4
                    ${
                        todo.complete ? 'line-through' : ''
                    }
                `} >
                {todo.name}
            </span>
            
            {/* display checkbox */}
            <input type="checkbox" className="w-5 h-5" checked={todo.complete} onChange={() => toggleTodo(todo.id)}/>
        </div>
        
        {/* display delete icon */}
        <div className="flex flex-row justify-center cursor-pointer" onClick={() => handleTaskDelete(todo.id)}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mt-1 ml-2 delete" fill="none" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    </div>
    )
}

export default Todo