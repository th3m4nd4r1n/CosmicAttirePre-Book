import React from "react";

const Header = () => {
    return(
        <>
        <ul className="nav">
            
            <li>
                <a href="/"><button className="menu">Home</button></a>

            </li>
            <li>
                <a href="/features"><button className="menu">Features</button></a>
            </li>
            <li>
                <a href="/reviews"><button className="menu">Reviews</button></a>

            </li>
            <li>
                <a href="/aboutus"><button className="menu">About Us</button></a>
            </li>
        </ul>   
        
        </>
    )
}
export default Header