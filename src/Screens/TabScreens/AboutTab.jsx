import React from 'react'



function AboutTab() {

  return (

    <div className='w-full h-full flex items-start justify-start flex-col p-4'>

        <h2 className='text-xl font-jura uppercase font-semibold'>About Me</h2>

        <span className='w-full h-[2px] bg-linear-to-r from-white to-[#0d4952cc] opacity-10 to-70% mt-3' />

        <h3 className='text-xl font-poppins font-semibold tracking-wider mt-4'>Howdy! I'm Arslan Ahmed.</h3>

        <p className='text-sm mt-2 font-poppins leading-[1.4rem] font-light'>I’m a dedicated full-stack web developer with deep expertise in building robust backends, crafting responsive front-end interfaces and designing seamless API integrations. Whether it’s real-time WebSocket chat features, secure authentication, or dynamic data visualization, I deliver polished, scalable solutions tailored to each client’s needs.</p>

        <span className='w-full h-[2px] bg-linear-to-r from-white to-[#0d4952cc] opacity-10 to-70% mt-4' />

        <div className='w-full flex flex-wrap items-start justify-start mt-3'>

          <div className='w-1/2 flex items-center justify-start text-base font-jura font-bold'>

            AGE -- 18 Years

          </div>
          
          <div className='w-1/2 flex items-center justify-start text-base font-jura font-bold'>

            RESIDENCE -- Pakistan

          </div>
          
          <div className='w-1/2 flex items-center justify-start text-base font-jura font-bold mt-6'>

            FREELANCE -- Available

          </div>
          
          <div className='w-1/2 flex items-center justify-start text-base font-jura font-bold mt-6'>

            EXPERIENCE -- 3+ Years

          </div>

        </div>

        <span className='w-full h-[2px] bg-linear-to-r from-white to-[#0d4952cc] opacity-10 to-70% mt-4' />

    </div>

  )

}


export default AboutTab