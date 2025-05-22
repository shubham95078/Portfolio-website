import React from 'react'
import logo from '../assets/Logo-Main.webp'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { FaSquareXTwitter } from 'react-icons/fa6'
import { FaInstagram } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { GITHUB_URL, LINKEDIN_URL } from '../constants/Constant'
import Resume from '../assets/Shani_Latest.pdf'
const Navbar = () => {
  return (
    <nav className=' flex justify-between mb-20 py-6 text-white'>
        <div className='flex flex-shrink-0 items-center'>
            {/* <img src={logo} alt='logo' className='w-20 rounded-lg h-auto m-2 ' /> */}
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl '>
            <Link to = {LINKEDIN_URL}><FaLinkedin /></Link>
            
            <Link to = {GITHUB_URL}><FaGithub /></Link>

            <a href={Resume} download="Resume">
              <button className='text-sm border-blue-800 p-1 lg:m-2 rounded bg-blue-600 text-white shadow-lg hover:bg-blue-500 '>Download CV</button>
            </a>
        </div>
    </nav>
  )
}

export default Navbar