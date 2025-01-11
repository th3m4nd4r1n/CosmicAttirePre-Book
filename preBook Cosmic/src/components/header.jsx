import React from "react";

const Header = () => {
    return(
        <>
         <nav className="h-24 w-screen nav text-white fixed z-10 md:flex md:justify-center">
            <div className="  flex justify-center my-[5%] rounded-full md:my-[2%] md:w-fit">
<a href="https://www.github.com/th3m4nd4r1n"><button className="border-black bg-white  text-black rounded-full w-[30vw] h-[5vh] hover:bg-blue-500 duration-150 md:w-[15vw] md:text-3xl md:font-bold md:hover:text-pink-300">Book Now</button></a>
            </div>
         </nav>
        </>
    )
}
export default Header