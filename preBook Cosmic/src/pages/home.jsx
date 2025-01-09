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

          <div className='flex justify-center'> 
        
          <div className='-z-10 w-screen h-screen bg-transparent fixed'>

            <Suspense>
          
          <Canvas className='webgl -z-10 h-screen ' gl={{antialias: true}} performance={{min: 0.5, max: 1}}> 
        
 
    
            <Environment preset='studio' environmentIntensity={0.03} />
         
            <OrbitControls enableDamping={false} enabled={false} enablePan={false} enableZoom={false} dampingFactor={0} />
    
          <Model />
   
    
          </Canvas>
        
          </Suspense>  
          </div>
        
           
          </div> 
          <div className='h-screen mt-36 text-white '>
           <Hero />
          </div>
          <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] sticky top-0 py-20'>
            
            <h3 className='bg-white w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>
              STYLISH
            </h3>

          </div>
           <div className='text-center flex justify-center font-[kanit] h-[150vh] sticky top-0 py-20'>
            <h3 className='bg-white w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

            PRACTICAL
            </h3>
           </div>
           <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] sticky top-0 py-20'>
            <h3 className='bg-white w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

            SOCIAL
            </h3>
           </div>
         
          <Book />
          </div>
            <Loader />
        </>
      )
}
export default Home