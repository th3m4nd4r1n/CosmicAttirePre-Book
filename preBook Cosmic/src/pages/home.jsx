import Hero from '../components/hero'
import Model from '../components/Model'
import { Environment, OrbitControls } from '@react-three/drei'
import { Canvas, useFrame } from '@react-three/fiber'
import { Suspense } from 'react'



const Home = () => {
    return (
        <>
            <div className='bgCustom w-screen h-[200vh] absolute m-0 p-0'>
            </div>
            <div>

                <div className='flex justify-center'>

                    <div className='-z-10 w-screen h-screen bg-transparent fixed'>

                        <Suspense>

                            <Canvas className='webgl -z-10 h-screen ' gl={{ antialias: true }} performance={{ min: 0.5, max: 1 }}>



                                <Environment preset='studio' environmentIntensity={0.03} />

                                <OrbitControls enableDamping={false} enabled={false} enablePan={false} enableZoom={false} dampingFactor={0} />

                                <Model />


                            </Canvas>

                        </Suspense>
                    </div>


                </div>

                <div className='h-screen mt-36 text-[rgba(233,205,255)]  m-0 '>
                    <Hero />
                </div>


                <div className='text-center flex justify-center font-[kanit] h-[100vh] sticky top-0 py-20 md:py-32'>
                    <h3 className=' w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg'></h3>
                </div>
                <div className='flex justify-between h-screen w-screen'>

                    <div className='relative h-[550vh] bg-[#ffd900c4] md:w-[5vw] w-[4vw] blur-[50px] md:blur-[300px]'>
                    </div>
                    <div className='relative h-[550vh] bg-[#ffd900c4] md:w-[5vw] w-[4vw] blur-[50px] md:blur-[300px]'>

                    </div>
                </div>
                <div className='text-center flex justify-center font-[kanit] h-[150vh] '>
                    <h3 className='fader opacity-0 w-[70vw] z-1000 h-fit font-bold  rounded-lg text-white md:text-9xl sticky top-[30vh] text-5xl md:top-[40vh] font-[league spartan]'>
                        Wear your tech, Share your <span className='text-[#ffd900]'>WORLD.</span>
                    </h3>
                </div>

                <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] '>
                    <h3 className='fader opacity-0 w-[70vw] z-1000 h-fit md:text-9xl font-bold rounded-lg text-white sticky top-[30vh] text-5xl md:top-[35vh]'>
                        Always <span className='text-[#ffd900]'>READY </span>
                        no charging, no limits.
                    </h3>
                </div>
                <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] '>
                    <h3 className='fader opacity-0 w-[70vw] z-1000 h-fit md:text-9xl font-bold rounded-lg text-white sticky top-[30vh] text-5xl md:top-[35vh]'>

                        Style that thrives, even under<span className='text-[#0097b2]'> WATER</span>.
                    </h3>
                </div>

                <div className='text-center flex justify-center z-100 font-[kanit] h-[150vh] py-20 md:py-32'>
                    <h3 className=' w-[50%] z-1000 h-fit text-2xl font-bold rounded-lg  sticky top-0'></h3>
                </div>
            </div>
        </>
    )
}
export default Home