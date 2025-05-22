import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { FaHtml5, FaSquareGithub } from "react-icons/fa6";
import { FaCss3Alt } from "react-icons/fa6";
import { FaGitAlt, FaJsSquare } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaBootstrap } from "react-icons/fa";
import { RiNextjsLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { SiShadcnui } from "react-icons/si";
import {motion} from 'motion/react'
const Technology = () => {
    const iconVariants = (duration) => ({
        initial : {y:-10},
        animate : {
            y:[-10,10],
            transition:{
                duration : duration,
                ease: "linear",
                repeat: Infinity,
                repeatType : "reverse",
            },
        },
    });
  return (
    <div className='border-b border-neutral-900  pb-24'>
        <motion.h1 
        whileInView={{opacity:1,y:0}}
        initial = {{opacity:0,y:-100}}
        transition={{duration:1,delay:0.5}}
        className='my-20 text-4xl text-center'>Technologies</motion.h1>
        <motion.div
        whileInView={{opacity:1,x:0}}
        initial = {{opacity:0,x:-100}}
        transition={{duration:1,delay:0.75}}
        className='flex flex-wrap items-center justify-center  gap-5'>
            <motion.div 
            variants = {iconVariants(1)}
            initial = "initial"
            animate = "animate"
            className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaHtml5 className='text-7xl text-red-500'/>
            </motion.div>
            <motion.div
                variants = {iconVariants(3)}
                initial = "initial"
                animate = "animate"
            className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaCss3Alt className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div
                variants = {iconVariants(7)}
                initial = "initial"
                animate = "animate"            
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaJsSquare className='text-7xl text-yellow-400'/>
            </motion.div>
            <motion.div
                variants = {iconVariants(4)}
                initial = "initial"
                animate = "animate"            
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiTailwindCssFill className='text-7xl text-cyan-300'/>
            </motion.div>
            <motion.div
                variants = {iconVariants(2.5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiReactjsLine className='text-7xl text-cyan-400'/>
            </motion.div>
            {/* Github */}
            <motion.div
                variants = {iconVariants(0.5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaSquareGithub  className='text-7xl'/>
            </motion.div>
            {/* Git */}
            {/* <motion.div
                variants = {iconVariants(2)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaGitAlt   className='text-7xl text-red-600'/>
            </motion.div> */}
            <motion.div
                variants = {iconVariants(5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <FaBootstrap className='text-7xl text-purple-600'/>
            </motion.div>
            {/* <motion.div
                variants = {iconVariants(7.5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <RiNextjsLine className='text-7xl  '/>
            </motion.div>
            <motion.div
                variants = {iconVariants(2.5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <TbBrandTypescript className='text-7xl text-blue-600'/>
            </motion.div>
            <motion.div
                variants = {iconVariants(5)}
                initial = "initial"
                animate = "animate"
                className='rounded-xl border-2 p-2 border-neutral-800'>
                <SiShadcnui className='text-7xl '/>
            </motion.div> */}


        </motion.div>
    </div>
  )
}

export default Technology