import React from 'react'
import Navbar from './sections/Navbar'
import Hero from './sections/Hero'
import About from './sections/About'
import Features from './sections/Features'
import Footer from './sections/Footer'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden overflow-hidden'> 
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Footer/>
    </main>
  )
}

export default App
