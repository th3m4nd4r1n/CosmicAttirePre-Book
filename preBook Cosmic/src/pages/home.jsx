import Header from '../components/header'
import Hero from '../components/hero'
import Model from '../components/Model'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber' 
import Book from '../components/bookNow'
const Home = () => {
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
          <Book />
        </>
      )
}
export default Home