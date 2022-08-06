import React from 'react'
import styles from './Menu.module.css'

const Menu = (props) => {
  const { todos } = props;

  return (
    <div className="flex flex-row items-center justify-between border-b-2 border-black">
        
        {/* display remaining tasks (todo's) */}
        <div className="flex flex-row my-3">
    
            {
              todos.length < 1 ? 
              <span className='text-xl'>You do not have any tasks</span> :
              <span className='text-xl'><span className='text-red-600'>{todos.length}</span> Remaining Tasks</span>
            }

        </div>
        
        {/* filter task menu for completed, not complete, and all */}
        <div>
            <label for="filter" className={`text-xl mr-1 ${styles.filter}`}>Filter Tasks:</label>
            <select name="filter" id="filter" className="text-xl text-center text-blue-600">
                <option value="All">All</option>
                <option value={false}>Outstanding</option>
                <option value={true}>Completed</option>
            </select>
      </div> 
    </div>
  )
}

export default Menu