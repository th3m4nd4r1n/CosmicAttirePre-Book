import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header'
import Hero from './components/hero'
import Model from './components/Model'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber' 

function App() {
  const [count, setCount] = useState(0)
  var x;
  var y;

  let screenLog = document.querySelector("#screen-log");
  document.addEventListener("mousemove", logKey);
  
  function logKey(e) {
   x = e.clientX;
   y = e.clientY;
  }
  console.log(x);
  return (
    <>
      <Header />
      <div className="canv">
      <Canvas className='webgl'> 
        <Environment preset='studio' environmentIntensity={0.03} />
     
        <OrbitControls enableDamping={true} enabled={true} enablePan={false} enableZoom={false} dampingFactor={0.02} />

      <Model />


      </Canvas>
      </div>
      <Hero />
    </>
  )
}

export default App
