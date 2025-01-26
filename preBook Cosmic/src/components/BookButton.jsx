import React from 'react'
import CountDown from './CountDown'
const BookButton = () => {
  return (
    <>
    
   <div className="relative text-white top-[10vw] flex justify-center text-9xl font-[kanit] underline">
    <h2>
      Alpha 1
    </h2>
   </div>
      <div className='h-screen flex flex-col justify-end'>
        <div className='flex justify-between items-center py-[3vh] h-fit'>

          <div className='flex justify-start text-white font-[kanit] text-3xl pl-[10vw] underline py-[10vh]'>
            <CountDown targetDate="2025-01-30T00:00:00" />
          </div>
          <a href="/form"><button className='text-white w-fit hover:animate-bounce ease-in pr-[10vw] font-[kanit] rounded-lg text-4xl underline '>Book Now</button></a> </div>

      </div>
    </>
  )
}

export default BookButton