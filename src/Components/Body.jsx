import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import About from './About'
import Technology from './Technology'
import Experience from './Experience'
import Project from './Project'
import Contact from './Contact'

const Body = () => {
  return (
    <div className=" text-neutral-300 antialiased selection:bg-cyan-200 selection:text-blue-600 overflow-hidden">
      <div className=" top-0 z-[-2] w-full h-auto bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <Navbar />
          <Hero />
          <About />
          <Technology />
          <Experience />
          <Project />
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Body;
