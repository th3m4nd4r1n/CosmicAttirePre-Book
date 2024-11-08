import { meshBounds, useGLTF } from "@react-three/drei";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";

    // 

  
const Model = () => {
      function tick() {
    useFrame((state, delta) => {
       ref.current.rotation.y = 0.45;
       refRot.current.position.x = 2*Math.sin(state.clock.elapsedTime)
       refRot2.current.position.y = -2*Math.sin(state.clock.elapsedTime)
       refRot.current.position.y = 2*Math.cos(state.clock.elapsedTime)
       refRot2.current.position.x = -2*Math.cos(state.clock.elapsedTime)
       refRot.current.position.z = 0.1
    })}
   tick();

    // 
 const { scene } = useGLTF('../../public/models/bracelet.gltf');
 const ref = useRef();
 const refRot = useRef();
 const refRot2 = useRef();
    return (<>
      <pointLight ref={refRot} color={'red'} intensity={2} />
      <pointLight ref={refRot2} color={'blue'} intensity={2} />
      <mesh ref={ref} >
        <primitive object={scene} scale={0.15} />
      </mesh>
    </>
        );
}
export default Model;