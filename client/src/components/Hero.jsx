import React from 'react'
import { useNavigate } from 'react-router-dom'

const Hero = () => {

    const navigate = useNavigate()

  return (
    <div className='px-4 sm:px-20 xl:px-32 relative inline-flex flex-col w-full justify-center bg-[url(assets/gradientBackground.png)] bg-cover bg-no-repeat min-h-screen'>
        <div className='text-center mb-6'>
            <h1 className='text-3xl sm:text-5xl md:text-6xl 2xl:text-7xl font-semibold mx-auto leading-[1.2]'>Create Amazing Content <br /> 
            <span className='text-primary'>With AI Tools</span></h1>
            <p className='mt-4 max-w-xs sm:max-w-lg 2xl:max-w-xl m-auto max-sm:text-xs text-gray-600'>Transform your ideas into stunning visuals with AI-powered design tools.</p>
        </div>

        <div className='flex justify-center gap-4 flex-wrap text-sm max-sm:text-xs'>
            <button onClick={()=> navigate('/ai')} className='bg-primary text-white px-10 py-3 rounded-lg hover:scale-102 transition active:scale-95 cursor-pointer'>Start Creating Now</button>
            <button className='bg-white border-gray-300 px-10 py-3 rounded-lg hover:scale-102 transition active:scale-95 cursor-pointer text-gray-600'>Watch Demo</button>
        </div>
    </div>
  )
}

export default Hero