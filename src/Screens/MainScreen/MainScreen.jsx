import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExpertiseSection from './ExpertiseSection';



function MainScreen() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    
    <section className='w-full flex flex-col items-start justify-start relative overflow-hidden bg-dull' style={{zIndex : 3}}>

      <HeroSection />
      <AboutSection />
      <ExpertiseSection />
      
    </section>

  )

}


export default MainScreen