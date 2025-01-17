import { Environment, meshBounds, useGLTF } from "@react-three/drei";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";

    // 

  
function max(a,b){
  return a>b?a:b;
}
const Model = () => {
  
  var scalingFactor = (max(window.innerWidth/1350, 0.9))*0.1;
 const viewport = useThree((state) => state.viewport);
 function tick() {
   useFrame((state, delta) => {
     ref.current.rotation.x=window.scrollY*0.005;
    //  ref.current.rotation.y=window.scrollY*0.001;
    // ref.current.position.y=-1;
       
    })}
   tick();

    // 
 const { scene } = useGLTF('models/bracelet.gltf');
 const ref = useRef();
 const refRot = useRef();
 const refRot2 = useRef();
    return (<>
      <pointLight ref={refRot} color={'wheat'} intensity={20} />
      <pointLight ref={refRot2} color={'gray'} intensity={20} />
      <Environment preset="studio" environmentIntensity={0.028} />
      <mesh ref={ref} >
        <primitive object={scene} scale={scalingFactor} />
      </mesh>
    </>
        );
}
export default Model;