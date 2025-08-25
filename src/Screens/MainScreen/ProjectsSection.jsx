import React from 'react'
import {motion} from 'motion/react'
import SpotlightCard from '../../Components/ReactBitComponents/SpotlightCard/SpotlightCard'
import VendezyImage from '../../assets/project_images/vendezy.png'


function ProjectsSection() {
  return (
    // 1) Make the section fill the viewport and stay fixed
    <section className='w-full flex flex-col h-full items-center justify-start bg-transparent py-8 rounded-4xl border-2 border-primary max-sm:border-none' style={{zIndex : 3, boxShadow : "0 0 15px 0px #fca311"}}>

      <div className='flex items-center justify-center relative'>
          <motion.div initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.8}} className='my-4 flex items-center justify-center relative'>
            <span className='w-3 h-3 bg-primary rotate-45 rounded-sm'></span>
            <span className='w-3 h-3 bg-primary rotate-45 absolute animate-ping rounded-sm'></span>
          </motion.div>
          <h2 className='text-4xl mx-6 font-future uppercase tracking-wider text-primary max-md:text-3xl'>Projects</h2>
          <motion.div initial={{scale : 0.7, opacity : 0}} animate={{scale : 1, opacity : 100}} transition={{delay : 0.8}} className='my-4 flex items-center justify-center relative'>
            <span className='w-3 h-3 bg-primary rotate-45 rounded-sm'></span>
            <span className='w-3 h-3 bg-primary rotate-45 absolute animate-ping rounded-sm'></span>
          </motion.div>
        </div>

        <div className='w-[90%] flex flex-wrap items-start justify-between mt-12 h-full overflow-x-hidden overflow-y-scroll'>

            <div className='w-[49%] h-[62%] flex flex-col items-center justify-center relative overflow-hidden rounded-xl group shadow-xl max-md:w-full max-md:mt-3'>

              <div className='w-full h-full bg-center bg-no-repeat bg-cover transition-all group-hover:scale-110 group-hover:rotate-3 duration-200' style={{backgroundImage : `url('${VendezyImage}')`}}></div>

              <div className='absolute w-full h-full flex flex-col items-center justify-center bg-[#ffffff30] bg-clip-padding backdrop-blur-none group-hover:backdrop-blur-xs transition-all duration-200'>
                <a href='https://multivendor-app-final-frontend.vercel.app/' target='__blank' className='bg-[#ffffff30] flex items-center justify-center border-3 border-[#ffffff80] shadow-xl rounded-full px-5 py-3 backdrop-blur-lg font-semibold text-dull transition-all duration-300 hover:scale-105' style={{fontSize : "calc(16px - 0.12vw)"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"} style={{marginRight : "8px"}}>
                      <path d="M11.1188 2.99805C6.55944 3.45084 2.99854 7.29857 2.99854 11.9782C2.99854 16.9624 7.03806 21.0029 12.0211 21.0029C16.6995 21.0029 20.5464 17.4412 20.9991 12.8807" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5576 3.4943L11.0483 13.0595M20.5576 3.4943C20.0635 2.99954 16.7351 3.04566 16.0315 3.05567M20.5576 3.4943C21.0517 3.98905 21.0056 7.32199 20.9956 8.0266" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Multivendor Ecommerce Application
                </a>
                <div className='flex items-start justify-start mt-4'>

                  <span className='bg-[#ffffff40] shadow-md text-yellow-500 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>Python</span>
                  <span className='bg-[#ffffff40] shadow-md text-green-800 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>Django</span>
                  <span className='bg-[#ffffff40] shadow-md text-cyan-500 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>React</span>
                  <span className='bg-[#ffffff40] shadow-md text-blue-500 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>PostgreSQL</span>

                </div>
              </div>


            </div>
            <div className='w-[49%] h-[62%] flex flex-col items-center justify-center relative overflow-hidden rounded-xl group shadow-xl max-md:w-full max-md:mt-3'>

              <div className='w-full h-full bg-center bg-no-repeat bg-cover transition-all group-hover:scale-110 group-hover:rotate-3 duration-200' style={{backgroundImage : `url('${VendezyImage}')`}}></div>

              <div className='absolute w-full h-full flex flex-col items-center justify-center bg-[#ffffff30] bg-clip-padding backdrop-blur-none group-hover:backdrop-blur-xs transition-all duration-200'>
                <a href='https://multivendor-app-final-frontend.vercel.app/' target='__blank' className='bg-[#ffffff30] flex items-center justify-center border-3 border-[#ffffff80] shadow-xl rounded-full px-5 py-3 backdrop-blur-lg font-semibold text-dull transition-all duration-300 hover:scale-105' style={{fontSize : "calc(16px - 0.12vw)"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={20} height={20} color={"#ffffff"} fill={"none"} style={{marginRight : "8px"}}>
                      <path d="M11.1188 2.99805C6.55944 3.45084 2.99854 7.29857 2.99854 11.9782C2.99854 16.9624 7.03806 21.0029 12.0211 21.0029C16.6995 21.0029 20.5464 17.4412 20.9991 12.8807" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M20.5576 3.4943L11.0483 13.0595M20.5576 3.4943C20.0635 2.99954 16.7351 3.04566 16.0315 3.05567M20.5576 3.4943C21.0517 3.98905 21.0056 7.32199 20.9956 8.0266" stroke="#141B34" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  Multivendor Ecommerce Application
                </a>
                <div className='flex items-start justify-start mt-4'>

                  <span className='bg-[#ffffff40] shadow-md text-yellow-500 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>Python</span>
                  <span className='bg-[#ffffff40] shadow-md text-green-800 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>Django</span>
                  <span className='bg-[#ffffff40] shadow-md text-cyan-500 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>React</span>
                  <span className='bg-[#ffffff40] shadow-md text-blue-500 ml-2 bg-clip-padding backdrop-blur-md font-semibold px-5 py-2 rounded-full' style={{fontSize : "calc(16px - 0.12vw)"}}>PostgreSQL</span>

                </div>
              </div>


            </div>
            

        </div>
    </section>
  )
}

export default ProjectsSection
