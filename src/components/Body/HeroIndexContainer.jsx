import React from 'react'
import ParticlesBackground from '../Particles/ParticlesBackground'

const HeroIndexContainer = () => {
    return (
        <>
            <ParticlesBackground/>
            <div className='h-screen w-screen relative -z-20 bg-[#f2f2f2]  dark:bg-[#1a2026] '>
                <div className='w-full h-full flex justify-center items-center'>
                    <p>hola</p>
                </div>
            </div>
            
        </>
    )
}

export default HeroIndexContainer