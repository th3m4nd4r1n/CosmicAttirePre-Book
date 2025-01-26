import React from 'react'

const BookButton = () => {
  return (
    <>
    <div className='h-screen flex flex-col justify-end'> 
    <div className='flex justify-end items-center py-[10vh]'>
    <a href="/form"><button className='text-white pr-[10vw] font-[kanit] rounded-lg text-4xl underline '>Book Now</button></a>
    </div>
    </div>
    </>
  )
}

export default BookButton