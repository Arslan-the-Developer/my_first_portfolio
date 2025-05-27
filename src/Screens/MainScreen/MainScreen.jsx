import React, { useEffect, useState } from 'react'
import { motion } from 'motion/react';
import GridDistortion from '../../Components/ReactBitComponents/GridDistortion/GridDistortion';
import PicOne from '../../assets/pl1.jpg'
import PicTwo from '../../assets/pl2.jpg'
import PicThree from '../../assets/pl3.jpg'
import PicFour from '../../assets/pl4.jpg'


function MainScreen() {

  const [isMenuOpen, setMenuOpen] = useState(false);

  return (
    
    <section className='w-full h-screen bg-dull flex flex-col items-center justify-center relative'>

      <GridDistortion
        imageSrc="https://images.unsplash.com/photo-1738831920727-73e17adc5b87?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        grid={10}
        mouse={0.4}
        strength={0.15}
        relaxation={0.9}
        className="absolute opacity-60"
      />
      

      <div className='w-full h-full absolute pointer-events-none bg-linear-to-t from-dull to-transparent from-5%'></div>


      <div className='min-w-[450px] w-7/10 h-full flex flex-col items-start justify-start pointer-events-none' style={{zIndex : "2"}}>

        <nav className='flex items-center justify-between h-18 w-full'>

          <button onClick={() => setMenuOpen(!isMenuOpen)} className='flex items-center justify-center cursor-pointer pointer-events-auto'>
            {
              !isMenuOpen ? (
                <motion.span initial={{opacity : 0}} animate={{opacity : 100}} >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={30} height={30} color={"#ffffff"} fill={"none"}>
                      <path d="M4 9L20 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 15L14 15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.span>
              ) : (
                <motion.svg initial={{opacity : 0, scale : 0.7}} animate={{opacity : 100, scale : 1}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24} color={"#ffffff"} fill={"none"}>
                    <path d="M19.0005 4.99988L5.00049 18.9999M5.00049 4.99988L19.0005 18.9999" stroke="#ffffff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path>
                </motion.svg>
              )
            }
          </button>

          <motion.button initial={{x : 20, opacity : 0}} animate={{x : 0, opacity : 100}} transition={{delay : 0.3}} className='px-7 py-3 bg-white rounded-full font-poppins relative overflow-hidden flex items-center justify-center group transition-all cursor-pointer pointer-events-auto'>
            <span className='w-full h-full bg-white flex items-center justify-center transition-all group-hover:-translate-x-full'>Lets Talk</span>
            <span className='w-full h-full bg-linear-to-l from-primary to-white absolute flex items-center justify-center translate-x-full transition-all shadow-md group-hover:translate-x-0'>Lets Talk</span>
          </motion.button>

        </nav>

        <div className='w-full flex items-center justify-center flex-col h-6/10 relative max-md:h-5/10 max-md:justify-around'>

          <div className='w-full flex items-center justify-center flex-col relative'>
            <motion.h1 initial={{y : -20, opacity : 0}} animate={{y : 0, opacity : 100}} transition={{delay : 0.5}} className='font-future text-primary tracking-wider text-[8.5rem] max-md:text-[6rem] max-sm:text-[5.2rem]' style={{lineHeight : '1.3'}}>ARSLAN</motion.h1>
            <motion.h1 initial={{y : 20, opacity : 0}} animate={{y : 0, opacity : 100}} transition={{delay : 0.5}} className='font-future text-primary tracking-wider text-[8.5rem] max-md:text-[6rem] max-sm:text-[5.2rem]' style={{lineHeight : '1.3'}}>AHMAD</motion.h1>

            <motion.img initial={{scale : 1.15, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.7}} className='w-60 h-60 max-md:w-40 max-md:h-40 max-md:p-2 rounded-full object-contain object-center aspect-square absolute bg-primary-translucent p-3' style={{boxShadow : "0 0 20px 0px #000000"}} src={PicThree} alt="" />
          </div>

        </div>

        <div className='w-full flex flex-col items-center justify-center'>

          <div className='w-full flex items-center justify-center'>

            <motion.span initial={{x : -30, opacity : 0}} animate={{x : 0, opacity : 100}} transition={{delay : 0.8}} className='w-30 h-[1.5px] bg-primary rounded-full'></motion.span>

            <motion.div initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.8}} className='mx-4 flex items-center justify-center relative'>
              <span className='w-4 h-4 bg-primary rotate-45 rounded-sm'></span>
              <span className='w-4 h-4 bg-primary rotate-45 absolute animate-ping rounded-sm'></span>
            </motion.div>

            <motion.span initial={{x : 30, opacity : 0}} animate={{x : 0, opacity : 100}} transition={{delay : 0.8}} className='w-30 h-[1.5px] bg-primary rounded-full'></motion.span>
            
          </div>

          <motion.p initial={{y : 15, opacity : 0}} animate={{y : 0, opacity : 100}} transition={{delay : 1}} className='mt-9 w-120 max-sm:w-80 text-center text-primary capitalize font-poppins font-light leading-8'>I’m Arslan Ahmad – a Full Stack Web Developer & API Expert Passionately Creating Innovative, Scalable, and Secure Web Solutions to empower businesses For Over 3 Years</motion.p>

        </div>

      </div>
      
    </section>

  )

}


export default MainScreen