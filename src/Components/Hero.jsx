import React from 'react'
import {NAME} from '../constants/Constant'
import { ROLE } from '../constants/Constant'
import { HERO_CONTENT } from '../constants'
// import profile_img from '../assets/Shani.jpg'
import { PROFILE_IMG_URL } from '../constants/Constant'
const Hero = () => {
  return (
    <div className='border-b border-neutral-900  pb-4 lg:mb-35'>
        <div className="flex flex-wrap items-center">
            <div className='w-full lg:w-1/2'>
                <div className='flex flex-col items-center lg:items-start'>
                    <h1 className='pb-16 text-6xl tracking-tight font-thin lg:mt-16 lg:text-8xl'>{NAME}</h1>
                    <span className='bg-gradient-to-r from-purple-400 to-pink-300 via-blue-600 bg-clip-text  text-2xl lg:text-4xl  tracking-tight text-transparent'>{ROLE}</span>
                    <p className='my-2 max-w-xl py-6 font-light tracking-tighter text-xl'>{HERO_CONTENT}</p>
                </div>
                

            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
              <div className='flex justify-center '>
                  <img className='rounded-lg object-fit w-96 h-auto shadow-gradient-blue-black' src={PROFILE_IMG_URL} alt="Shani" />
              </div>
            </div>
        </div>
    </div>
  )
}

export default Hero