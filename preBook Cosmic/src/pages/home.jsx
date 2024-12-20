import Header from '../components/header'
import Hero from '../components/hero'
import Model from '../components/Model'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber' 
import Book from '../components/bookNow'
import {lazy, Suspense} from 'react'
import { Loader } from '@react-three/drei'


const Home = () => {
    return (
        <>
          <Header />
          <div className="bigBox">

          <div className="canv"> 
            <Suspense fallback={<boxGeometry />}>
          <Canvas className='webgl'> 
        
 
    
            <Environment preset='studio' environmentIntensity={0.03} />
         
            <OrbitControls enableDamping={true} enabled={true} enablePan={false} enableZoom={false} dampingFactor={0.02} />
    
          <Model />
   
    
          </Canvas>
        
          </Suspense>  
        
          </div>
          <Hero />
          <Book />
          </div>
            <Loader />
        </>
      )
}
export default Home