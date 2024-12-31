import React from 'react'
import logo from '../assets/Logo-Main.webp'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
const Navbar = () => {
  return (
    <nav className=' flex justify-between mb-20 py-6 text-white'>
        <div className='flex flex-shrink-0 items-center'>
            <img src={logo} alt='logo' className='w-20 rounded-lg h-auto m-2 ' />
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <FaLinkedin />
            <FaGithub />
            <FaSquareXTwitter />
            <FaInstagram />
        </div>
    </nav>
  )
}

export default Navbar