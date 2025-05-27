import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection';



function MainScreen() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    
    <section className='w-full flex flex-col items-center justify-center relative overflow-hidden'>

      <HeroSection />
      
    </section>

  )

}


export default MainScreen