import React from "react";
import Home from "./pages/home";
import Vid from "./components/featureVid";
import BookButton from "./components/BookButton";
import { Loader } from '@react-three/drei'
import Feature from "./pages/Feature";


const Scrolling = () => {
    return (
        <>

            <Home />
            <Vid />
            <Feature />
            <Loader />
      
        </>
    );
}

export default Scrolling