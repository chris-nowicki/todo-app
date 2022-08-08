import React from 'react'
import './Menu.module.css'

const Menu = (props) => {
  const { todos, setStatus } = props;
  const displayRemaining = todos.filter(todos => todos.complete === false)
  const displayCompleted = todos.filter(todos => todos.complete === true)

  return (
    <div className="flex flex-col items-center justify-between border-b-2 border-black my-2 sm:w-2/5 lg:w-1/5">
        
        {/* display remaining tasks (todo's) */}
        <div className="flex flex-row">
          <span className='text-xl'><span className='text-blue-600'>{displayRemaining.length}</span> Remaining Tasks</span>
        </div>
        <div className="flex flex-row">
          <span className='text-xl'><span className='text-blue-600'>{displayCompleted.length}</span> Completed Tasks</span>
        </div>
        
        {/* filter completed, not complete, and all tasks */}
        <div>
            <select name="filter" id="filter" className="text-xl text-center text-blue-600 w-full" onChange = {(e) => setStatus(e.target.value)}>
                <option value='all'>All</option>
                <option value='uncompleted'>Remaining</option>
                <option value='completed'>Completed</option>
            </select>
      </div> 
    </div>
  )
}

export default Menu