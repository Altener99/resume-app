import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import HomePage from './components/HomePage/HomePage'
import TechStack from './components/TechStack/TechStack'
import Experience from './components/Experience/Experience'
import Projects from './components/Projects/Projects'

function App() {
  const [count, setCount] = useState(0)

  //portfolio website

  //1.Navbar
  //2.HomePage
  //3.Tech Stack
  //4. Experience
  //5. Projects

  return (
    <div className='app'>
      <Navbar />
      <HomePage />
      <TechStack />
      <Experience />
      <Projects />
    </div>
  )
}

export default App
