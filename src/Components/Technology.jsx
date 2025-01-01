import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5 } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
const Technology = () => {
  return (
    <div className='border-b border-neutral-900  pb-24'>
        <h1 className='my-20 text-4xl text-center'>Technologies</h1>
        <div className='flex flex-wrap items-center justify-center  gap-5'>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaHtml5 className='text-7xl text-red-500'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaCss3Alt className='text-7xl text-blue-600'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaJsSquare className='text-7xl text-yellow-400'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiTailwindCssFill className='text-7xl text-cyan-300'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaBootstrap className='text-7xl text-purple-600'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiNextjsLine className='text-7xl  '/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <TbBrandTypescript className='text-7xl text-blue-600'/>
            </div>
            <div className='rounded-xl border-2 p-2 border-neutral-800'>
                <SiShadcnui className='text-7xl '/>
            </div>


        </div>
    </div>
  )
}

export default Technology