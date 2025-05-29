import React from 'react'
import ShinyText from '../../Components/ReactBitComponents/ShinyText/ShinyText'
import { motion } from 'motion/react'
import {PuffLoader} from 'react-spinners'


function AboutSection() {

  return (

    <section className='w-full flex flex-col h-[100vh] items-center justify-start bg-dull py-8' style={{zIndex : 3}}>

        <div className='h-full max-md:w-full flex flex-col items-center justify-start'>

          <div className='flex items-center justify-center relative'>
            {/* <h2 className='text-[1.9rem] font-future uppercase tracking-wider text-transparent opacity-30 absolute animate-ping' style={{WebkitTextStroke : "2px", WebkitTextStrokeColor : "#fca311"}}>ABOUT</h2>
            <h2 className='text-[3rem] font-future uppercase tracking-wider text-transparent opacity-20 absolute' style={{WebkitTextStroke : "2px", WebkitTextStrokeColor : "#fca311"}}>ABOUT</h2> */}
            <motion.div initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.8}} className='my-4 flex items-center justify-center relative'>
              <span className='w-3 h-3 bg-primary rotate-45 rounded-sm'></span>
              <span className='w-3 h-3 bg-primary rotate-45 absolute animate-ping rounded-sm'></span>
            </motion.div>
            <h2 className='text-4xl mx-6 font-future uppercase tracking-wider text-primary max-md:text-3xl'>ABOUT</h2>
            <motion.div initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.8}} className='my-4 flex items-center justify-center relative'>
              <span className='w-3 h-3 bg-primary rotate-45 rounded-sm'></span>
              <span className='w-3 h-3 bg-primary rotate-45 absolute animate-ping rounded-sm'></span>
            </motion.div>
          </div>

          <div className='w-full flex flex-col items-center justify-center content-center transition-all mt-15'>

            <h3 className='text-white w-full font-poppins font-thin italic text-center' style={{lineHeight : "1.4", fontSize : "calc(1.5rem + 1.5vw)"}}>
              <span className='text-primary font-futura' style={{fontSize : "calc(2rem + 1.5vw)"}}>"</span> <span className='opacity-70' style={{textShadow : "0 0 10px #ffffff"}}>Infinite Loops of Creativity - <br /> Zero Bugs of Doubt</span> <span className='text-primary font-futura' style={{fontSize : "calc(1.6rem + 1.6vw)"}}>"</span>
            </h3>

            <span className='w-40 h-[1px] bg-primary mt-15'></span>

            <p className='w-155 max-sm:w-88 max-md:w-120 text-center text-white font-poppins tracking-wide mt-15 font-extralight' style={{lineHeight : 1.9, fontSize : "calc(0.8rem + 0.7vw)"}}>Hey There! I am Arslan Ahmad. I am a Full Stack Web Developer & <span className='px-2 font-normal bg-primary text-dull rounded-sm'>API Expert</span>. I Unleash The Power of -- Programming with over <span className='bg-primary font-normal px-2 rounded-sm text-dull'>3+ Years</span> of strong command on it & deliver secure web solutions.</p>

          </div>

          <PuffLoader color='#fca311' className='mt-15' speedMultiplier={1} />

        </div>

    </section>

  )

}


export default AboutSection