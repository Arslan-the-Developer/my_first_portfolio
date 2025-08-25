import React, { useEffect, useState } from 'react'
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import ExpertiseSection from './ExpertiseSection';
import ProjectsSection from './ProjectsSection';
import ScrollStack, {ScrollStackItem} from '../../Components/ReactBitComponents/ScrollStack/ScrollStack';



function MainScreen() {

  

  return (
    
    <section className='h-screen w-full flex items-start justify-start relative'>


      <ScrollStack baseScale={1} itemScale={0} stackPosition='0%' className='custom-scrollbar w-full'>
        

        <ScrollStackItem itemClassName='flex flex-col items-start justify-start w-full'>
          <HeroSection />
        </ScrollStackItem>

        <ScrollStackItem itemClassName='bg-[#1c1c1c70] bg-clip-padding backdrop-blur-xl flex flex-col items-center justify-center rounded-4xl'>
          <AboutSection />
        </ScrollStackItem>

        <ScrollStackItem itemClassName='bg-[#1c1c1c20] bg-clip-padding backdrop-blur-xl flex flex-col items-center justify-center rounded-4xl'>
          <ExpertiseSection />
        </ScrollStackItem>
        
        <ScrollStackItem itemClassName='bg-[#1c1c1c20] bg-clip-padding backdrop-blur-xl flex flex-col items-center justify-center rounded-4xl'>
          <ProjectsSection />
        </ScrollStackItem>

      </ScrollStack>
      
    </section>

  )

}


export default MainScreen