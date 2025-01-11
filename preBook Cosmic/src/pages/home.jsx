import Header from '../components/header'
import Hero from '../components/hero'
import Model from '../components/Model'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber' 
import Book from '../components/bookNow'
import {lazy, Suspense} from 'react'



const Home = () => {
    return (
        <>
     
<div className='bgCustom w-screen h-[200vh] absolute m-0 p-0'>
          </div>
          <Header />

          <div>

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
          
          <div className='h-screen mt-36 text-white md:py-[5%] m-0 '>
           <Hero />
          </div>
        
        
           <div className='text-center flex justify-center font-[kanit] h-[150vh] sticky top-0 py-20 md:py-32'>
            <h3 className=' w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

          
            </h3>
           </div>
           <div className='text-center flex justify-center font-[kanit] h-[150vh] sticky top-0 py-20 md:py-32'>
            <h3 className='bg-white w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

            PRACTICAL
            </h3>
           </div>
           <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] sticky top-0 py-20 md:py-32'>
            <h3 className='bg-white w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

            SOCIAL
            </h3>
           </div>
           <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] sticky top-0 py-20 md:py-32'>
            <h3 className=' w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'>

            
            </h3>
           </div>
         
          </div>
          <Book />
        
           
        </>
      )
}
export default Home