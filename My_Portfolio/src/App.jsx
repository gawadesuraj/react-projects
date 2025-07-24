
import { useState } from 'react'
import './App.css'
import { LoadingScreen } from './componets/LoadingScreen.jsx'
import { Navbar } from './componets/Navbar.jsx'
import { MobileMenu } from './componets/MobileMenu.jsx'
import { Home } from './componets/sections/Home.jsx'
import { About } from './componets/sections/About.jsx'
import "./index.css"
import { Projects } from './componets/sections/Projects.jsx'
import { Contact } from './componets/sections/Contact.jsx'
function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <>
      {!isLoaded && <LoadingScreen onComplete = {() => setIsLoaded(true)}/>}
        <div className={`min-h-screen transition-opacity duration-700 ${isLoaded ? "opacity-100": "opacity-0"} bg-black text-gray-100`}>
          <Navbar menuOpen = {menuOpen} setMenuOpen  = {setMenuOpen}/>
          <MobileMenu menuOpen = {menuOpen} setMenuOpen  = {setMenuOpen}/>
          <Home/>
          <About/>
          <Projects/>
          <Contact />
        </div>
    </>
  )
}

export default App
