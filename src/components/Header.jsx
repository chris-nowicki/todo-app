import React from 'react'

const Header = () => {
  return (
    <div className='flex flex-row mt-10 border-b-2 justify-between items-center border-black'>
        <div className='flex flex-row'>
            <div className="flex flex-col items-center justify-center">
                <span className='text-4xl font-extralight'>FRI</span>
                <span className='text-5xl font-bold'>AUG</span>
            </div>
            <span className='text-8xl font-extralight'>5</span>
        </div>
            <span className='text-5xl text-blue-600'>Do Things</span>
    </div>
  )
}

export default Header