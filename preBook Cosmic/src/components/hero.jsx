import React from "react";
import CountDown from "./CountDown";

const Hero = () => {
    return (
        <>
        <div class="flex h-screen w-screen items-center justify-center bg-transparent">
    {/* <span class="absolute mx-auto flex w-fit bg-[rgba(255,215,0,0.5)] blur-xl pb-[15%] bg-clip-text text-6xl md:text-[180px] box-content font-extrabold text-transparent text-center select-none font-[kanit]">
    COSMIC ATTIRE
  </span> */}
    <h1
        class="absolute w-fit h-auto md:text-[400px] justify-center flex pb-[15%] -z-20 bg-[#a7a7a7] bg-clip-text text-6xl font-bold text-transparent text-center select-auto font-[League Spartan] blur-md">ALPHA 1</h1>
    <h1
        class="relative top-0 w-fit h-auto md:text-[400px] justify-center flex pb-[15%] -z-20 bg-[rgb(142,142,142)] bg-clip-text text-6xl font-bold text-transparent text-center select-auto font-[League Spartan]">ALPHA 1</h1>
        <div className="absolute pl-[2vw] pt-[15vw] text-white text-3xl w-screen flex justify-start">
            <CountDown targetDate="2025-01-30T00:00:00" />
        </div>
        <div className="absolute flex h-screen w-screen flex-col justify-start bottom-2 pl-[2vw]" >
            <img src="/cosmic_logo.jpg" alt="cosmic logo" className="h-[110px] w-[110px]" />
        </div>
        <div className="absolute flex w-[96vw] justify-end h-screen top-10 items-start">
            <a href="/form"><button className="w-fit font-[League Spartan] text-[24px] hover:animate-pulse text-white hover:text-[30px] duration-100 ease-linear uppercase font-semibold">Book Now</button></a>
        </div>
        <div className="absolute flex justify-start w-screen h-[60vh] text-lg items-end">

<h3 className="w-[22vw] pl-[2vw] text-white font-[League_Spartan]">
    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex minus perspiciatis, velit quo repudiandae laudantium aperiam quis voluptatem vitae, culpa distinctio veniam?
</h3>
        </div>
</div>

          
                {/* <div className="hero-title flex justify-center"> */}


                    {/* <h1 className="hero-title text-5xl h-screen md:text-[180px] md:font-medium font-[kanit] font-semibold py-[25vh] ">COSMIC ATTIRE</h1> */}
                     {/* <h2 className="md:pl-[4.5vw]   md:text-left font-[kanit] text-2xl md:text-[25px] font-medium md:font-medium text-center my-[25vh] md:my-5">
                        Ut enim ad minim  veniam, quis nostrud  exercitation ullamco  laboris nisi ut aliquip  ex ea  commodo consequat Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perferendis eveniet impedit praesentium. </h2> */}
                {/* </div> */}
                
        </>
    )
}
export default Hero