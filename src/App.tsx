import React from 'react'

import About from './components/About'
import Footer from './components/Footer/Footer'
import Hero from './components/Hero'
import Navbar from './components/Navbar/Navbar'
import Services from './components/Services'
import Tours from './components/Tours'

function App() {
  return (
    <>
      <Navbar />

      <Hero />
      <About />
      <Services />
      <Tours />

      <Footer />
    </>
  )
}

export default App
