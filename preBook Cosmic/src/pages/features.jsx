import React from "react";
import Image from "../components/featureImage"
import Header from "../components/header";
import Heading from "../components/featureHeading";
import FeatureDesc from "../components/featureDesc";
import Vid from "../components/featureVideo";
const Features = () =>{
return(
    <>
    <Header />
    <Heading />
    <FeatureDesc />
    <Vid />
    <Image />
    </>
)
}
export default Features