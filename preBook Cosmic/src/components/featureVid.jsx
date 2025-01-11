import React from "react";

const Vid = ()=>{
    return(<>
    <div className="w-screen md:h-screen h-[70vh] md:flex md:justify-center md:flex-col md:items-center ">
        <iframe className="  w-screen h-[37vh] rounded-xl border-2 border-gray-400 md:w-[60vw] md:h-[70vh]"  src="https://www.youtube.com/embed/yBx7UdNwkL8?si=zysZ3v0QRmXy4-b0" title="YouTube video player" frameborder="0" allow="accelerometer; loop; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        
                </div>
    </>
                );
}
export default Vid;