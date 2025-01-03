import React from 'react'
import { CONTACT } from '../constants'
import {motion} from 'motion/react'
import { Link } from 'react-router-dom'
import { RiContactsBook2Fill } from 'react-icons/ri'
const Contact = () => {

  return (
    <div className='border-b border-neutral-900 pb-20'>
        <motion.h1
        whileInView={{opacity:1,y:0}}
        initial = {{opacity:0,y:-100}}
        transition={{duration:1,delay:0.5}}
        className='my-10 text-center text-4xl'>Get in Touch</motion.h1>
        <motion.div
          whileInView={{opacity:1,y:0}}
          initial = {{opacity:0,y:100}}
          transition={{duration:1,delay:0.5}}
        className='text-center tracking-tighter'>
            <p className='my-4'>{CONTACT.address}</p>
            <p className='my-4'>{CONTACT.phoneNo}</p>
            
            <span className='border-green-600 bg-green-300  p-2 rounded text-base  text-green-700 hover:bg-green-500 hover:text-green-100'>
              <Link to="./contactform">Contact Me 🗨️</Link>

            </span>

        </motion.div>

    </div>
  )
}

export default Contact