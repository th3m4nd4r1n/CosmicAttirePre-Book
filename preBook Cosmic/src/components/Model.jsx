import { Environment, meshBounds, useGLTF } from "@react-three/drei";
import React from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { useRef } from "react";
import { sRGBEncoding } from "@react-three/drei/helpers/deprecated";

    // 

  
const Model = () => {
      function tick() {
    useFrame((state, delta) => {
       ref.current.rotation.y = 0.05*Math.cos(state.clock.elapsedTime) + 0.45;
       refRot.current.position.x = 3*Math.sin(state.clock.elapsedTime)
       refRot2.current.position.y = -3*Math.sin(state.clock.elapsedTime)
       refRot.current.position.y = 3*Math.cos(state.clock.elapsedTime)
       refRot2.current.position.x = -3*Math.cos(state.clock.elapsedTime)
       refRot.current.position.z = 0.8
       ref.current.rotation.z = 0.05*Math.sin(state.clock.elapsedTime);
       ref.current.rotation.x = -0.05*Math.sin(state.clock.elapsedTime);
    })}
   tick();

    // 
 const { scene } = useGLTF('public/models/bracelet.gltf');
 const ref = useRef();
 const refRot = useRef();
 const refRot2 = useRef();
    return (<>
      <pointLight ref={refRot} color={'wheat'} intensity={20} />
      <pointLight ref={refRot2} color={'gray'} intensity={20} />
      <Environment preset="studio" environmentIntensity={0.028} />
      <mesh ref={ref} >
        <primitive object={scene} scale={0.15} />
      </mesh>
    </>
        );
}
export default Model;