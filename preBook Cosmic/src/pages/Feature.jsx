import React from 'react'


const Feature = () => {
  return (
    <div className="md:h-[100vh] h-auto z-40 bg-[#000000]">
        <div className='h-screen w-screen '>
        {/* <img className='z-40 border-b-black border-b-4' src="cosmicfeature2.png" alt="features" /> */}
        <video className='md:visible invisible h-screen w-screen' src="cosmicvideo2.mp4" loop={true} autoPlay={true} muted={true} controls={false} draggable={false}></video>
        <video className='relative bottom-[100vh] z-50 md:invisible visible h-screen w-screen' loop={true} autoplay={true} muted={true} controls={false} draggable={false} src="cosmicvideophone.mp4"></video>
        <div className='relative md:bottom-[108vh] bottom-[120vh] p-0 m-0 flex justify-center text-white md:text-5xl text-3xl z-50'>
        <a href="./form"><button className='z-50 hover:animate-pulse w-[10vw] bg-white rounded-2xl font-[telegraf] font-semibold hover:bg-black hover:text-white hover:border-white hover:border-2 hover:rounded-2xl text-black text-3xl '>Book Now</button></a>
        </div>
        </div>
    </div>
  )
}
export default Feature