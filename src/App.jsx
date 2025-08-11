import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

const App = () => {
  return (
    <>
    <header>
      <Header/>
    </header>
    <main>
      <Hero/>
      <About/>
      <Projects/>
      <Contact/>
    </main>
    
    </>
  )
}

export default App