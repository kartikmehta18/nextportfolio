import React from 'react'
import Navbar from './components/Navbar'
import Herosection from './components/Herosection'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'

function page() {
  return (
    <div className='min-h-screen bg-black overflow-hidden'>
      {/* overflow-hidden */}
      <div className=' dark:bg-black bg-white  dark:bg-grid-white/[0.06] bg-grid-black/[0.2] relative'>
      <div  className=' max-w-7xl mx-auto p-5'>
      <Navbar />
      < Herosection />
      </div>
      <div className='h-10 x1:h-32 bg-gradient-to-t from-black absolute -bottom-5 left-0 x1:bottom-0 w-full"'>

      </div>
      <div className=' max-w-7xl mx-auto p-5 mt-20'>
      <Skills/>
      <Projects />
      <Footer />
      </div>
      </div>
      
    </div>
  )
}

export default page
