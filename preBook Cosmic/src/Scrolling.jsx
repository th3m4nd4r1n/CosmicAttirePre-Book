import React from "react";
import Home from "./pages/home";
import Vid from "./components/featureVid";
import { Loader } from '@react-three/drei'

const Scrolling = () => {
    return (
        <>

            <Home />
            <Vid />
            <Loader />

        </>
    );
}

export default Scrolling