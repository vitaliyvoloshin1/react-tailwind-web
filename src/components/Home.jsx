import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>

        {/* container */}
        <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
          <p className='text-pink-600'>Hi, my name is</p>
          <h1 className='text-4xl sm:text-7-xl font-bold text-[#ccd6f6]'>Vitaliy</h1>
          <h2 className='text-4xl sm:text-6xl font-bold text-[#8892b0]'>I am a Front-end dev</h2>
          <p className='text-[#8892b0] py-4 max-w-[700px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem corrupti ipsum maiores quas maxime reiciendis facere recusandae voluptate in, iusto, ipsam perferendis quod quo blanditiis voluptatem iste beatae dolorum sit?</p>
          <div>
            <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600'>
              View my work
              <span className='group-hover:rotate-90 duration-300'>
                <HiArrowNarrowRight className='ml-3'/>
              </span>
            </button>
          </div>
        </div>
    </div>
  )
}

export default Home