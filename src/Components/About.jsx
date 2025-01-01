import React from 'react'
import DESK_PNG from '../assets/Desk-work.png'
import { ABOUT_TEXT } from '../constants'
const About = () => {
  return (
    <div className='border-b border-neutral-900 pb-4'>
        <h1 className='text-center my-20 text-4xl lg:text-5xl bg-gradient-to-tr from-neutral-300 to-slate-800  bg-clip-text  text-transparent tracking-tighter'>About Me</h1>
        <div className='flex flex-wrap items-center'>
            <div className='w-full lg:w-1/2 '>
                <div className='flex justify-center items-end'>
                    <p className='text-xl bg-gradient-to-br from-slate-700 to-slate-300 bg-clip-text text-transparent'>{ABOUT_TEXT}</p>
                </div>

            </div>
            <div className='w-full lg:w-1/2 lg:p-8'>
                <div className='flex items-center justify-center'>
                    <img className='rounded-2xl ' src={DESK_PNG} alt="AboutMe" />
                </div>

            </div>

        </div>
        
    </div>
  )
}

export default About