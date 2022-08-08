import React from 'react'

const Header = () => {

  // get date and format
  //get today's date
  let date = new Date();

  // get day of the week
  const weekday = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let dayOfWeek = weekday[date.getDay()];

  // get the month
  let month = date.getMonth();
  month = date.toLocaleDateString("en", { month: "short" });
  month = month.toUpperCase()

  // get day of month
  let day = date.getDate()

  // get suffix for day
  let suffix =
      (date.getDate() % 10 === 1 && date.getDate() !== 11
      ? "st"
      : date.getDate() % 10 === 2 && date.getDate() !== 12
      ? "nd"
      : date.getDate() % 10 === 3 && date.getDate() !== 13
      ? "rd"
      : "th");

  return (
    <div className='flex flex-col mt-10 border-b-2 justify-center items-center border-black sm:w-2/5 lg:w-1/5'>
        <div className='flex flex-row'>
            <div className="flex flex-col items-center justify-center">
                <span className='text-4xl font-extralight'>{ dayOfWeek }</span>
                <span className='text-5xl font-bold'>{ month }</span>
            </div>
            <span className='text-8xl font-extralight m-0'>{ day }<span className="text-7xl m-0">{ suffix }</span></span>
        </div>
    </div>
  )
}

export default Header