import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';



function MainScreen() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    
    <section className='w-full flex flex-col items-start justify-start relative overflow-hidden'>

      <HeroSection />
      <AboutSection />
      
    </section>

  )

}


export default MainScreen