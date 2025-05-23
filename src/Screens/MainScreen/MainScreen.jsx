import React, { useState } from 'react'
import selfPic from '../../assets/profile-pic.png';
import ShinyText from '../../Components/ReactBitComponents/ShinyText/ShinyText'
import RotatingText from '../../Components/ReactBitComponents/RotatingText/RotatingText';
import FiverrLogo from '../../assets/FiverrLogo';
import InstagramLogo from '../../assets/InstagramLogo';
import GithubLogo from '../../assets/GithubLogo';
import LinkedInLogo from '../../assets/LinkedInLogo'
import FacebookLogo from '../../assets/FacebookLogo'
import WhatsAppLogo from '../../assets/WhatsAppLogo';
import AboutTab from '../TabScreens/AboutTab';
import ResumeTab from '../TabScreens/ResumeTab';
import WorksTab from '../TabScreens/WorksTab';
import StatsTab from '../TabScreens/StatsTab';
import ExpertiseTab from '../TabScreens/ExpertiseTab';
import ContactTab from '../TabScreens/ContactTab';


function MainScreen() {

  const [isAboutTabActive, setAboutTabActive] = useState(true);
  const [isResumeTabActive, setResumeTabActive] = useState(false);
  const [isWorksTabActive, setWorksTabActive] = useState(false);
  const [isStatsTabActive, setStatsTabActive] = useState(false);
  const [isExpertiseTabActive, setExpertiseTabActive] = useState(false);
  const [isContactTabActive, setContactTabActive] = useState(false);

  function setTabActive(tab_name) {

    switch (tab_name) {

      case 'about':
        setAboutTabActive(true);
        setResumeTabActive(false);
        setWorksTabActive(false);
        setStatsTabActive(false);
        setExpertiseTabActive(false);
        setContactTabActive(false);
        break;
      
      case 'resume':
        setAboutTabActive(false);
        setResumeTabActive(true);
        setWorksTabActive(false);
        setStatsTabActive(false);
        setExpertiseTabActive(false);
        setContactTabActive(false);
        break;
      
      case 'works':
        setAboutTabActive(false);
        setResumeTabActive(false);
        setWorksTabActive(true);
        setStatsTabActive(false);
        setExpertiseTabActive(false);
        setContactTabActive(false);
        break;
      
      case 'stats':
        setAboutTabActive(false);
        setResumeTabActive(false);
        setWorksTabActive(false);
        setStatsTabActive(true);
        setExpertiseTabActive(false);
        setContactTabActive(false);
        break;
      
      case 'expertise':
        setAboutTabActive(false);
        setResumeTabActive(false);
        setWorksTabActive(false);
        setStatsTabActive(false);
        setExpertiseTabActive(true);
        setContactTabActive(false);
        break;
      
      case 'contact':
        setAboutTabActive(false);
        setResumeTabActive(false);
        setWorksTabActive(false);
        setStatsTabActive(false);
        setExpertiseTabActive(false);
        setContactTabActive(true);
        break;
    
      default:
        break;
    }
    
  }

  return (
    
    <section className='w-full h-full flex items-center justify-center bg-transparent z-10'>

        <div className='w-3/10 h-8/10 relative  p-2 flex flex-col items-center justify-start rounded-sm'>

            <div className='w-50 h-50 rounded-full bg-[#0d4952] p-2' style={{zIndex : 2, boxShadow : "0 0 10px 0px rgba(0,0,0,.5)"}}>
                <img className='w-full h-full object-center object-contain' src={selfPic} alt="" />
            </div>
            <div className='absolute w-50 h-50 rounded-full bg-[#0d4952] p-3 translate-y-4 -translate-x-4 animate-spin border-r-2 border-[#14afc7] opacity-50' style={{zIndex : 1, boxShadow : "0 0 10px 0px rgba(0,0,0,.5)", animationDelay : "250ms"}}></div>
            <div className='absolute w-50 h-50 rounded-full bg-[#0d4952] p-3 -translate-y-4 translate-x-4 animate-spin border-r-2 border-[#14afc7] opacity-50' style={{zIndex : 1, boxShadow : "0 0 10px 0px rgba(0,0,0,.5)"}}></div>
            <div className='absolute w-50 h-50 rounded-full bg-[#0d4952] p-3 translate-y-4 translate-x-4 animate-spin border-r-2 border-[#14afc7] opacity-50' style={{zIndex : 1, boxShadow : "0 0 10px 0px rgba(0,0,0,.5)", animationDelay : "500ms"}}></div>

            <ShinyText text="- Arslan Ahmed -" disabled={false} speed={2} className='font-poppins font-semibold tracking-wide text-2xl mt-12' />
            
            {/* <hr className='w-30 border border-[#017c8f]' /> */}

            <RotatingText
              texts={['Programmer', 'Full Stack Developer', 'Freelancer', 'API Expert']}
              mainClassName="text-[#017c8f] font-jura font-semibold tracking-wide mt-5 uppercase overflow-hidden justify-center text-xl"
              staggerFrom={"first"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-120%" }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3500}
            />

            <div className='flex flex-col items-center justify-start mt-8 w-1/2'>

              <div className='flex items-center justify-around w-full'>

                <FiverrLogo />
                
                <InstagramLogo />
                
                <GithubLogo />

              </div>
              
              <div className='flex items-center justify-around w-full mt-4'>

                <LinkedInLogo />
                
                <FacebookLogo />
                
                <WhatsAppLogo />

              </div>

            </div>


        </div>
        
        <div className='w-5/10 h-7/10 ml-2 flex items-start justify-start rounded-sm'>

          <nav className='h-full w-20 bg-[#0d4952] -translate-x-2 rounded-sm flex flex-col items-center justify-between py-4' style={{boxShadow : "0 0 10px 0px rgba(0,0,0,.4)"}}>

            <i onClick={() => setTabActive('about')} className={`bi bi-person-fill text-2xl transition cursor-pointer ${isAboutTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            <hr className='border border-white opacity-5 w-full' />

            <i onClick={() => setTabActive('resume')} className={`bi bi-book-half text-2xl transition cursor-pointer ${isResumeTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            <hr className='border border-white opacity-5 w-full' />

            <i onClick={() => setTabActive('works')} className={`bi bi-eye-fill text-2xl transition cursor-pointer ${isWorksTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            <hr className='border border-white opacity-5 w-full' />

            <i onClick={() => setTabActive('stats')} className={`bi bi-grid-1x2-fill text-2xl transition cursor-pointer ${isStatsTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            <hr className='border border-white opacity-5 w-full' />

            <i onClick={() => setTabActive('expertise')} className={`bi bi-bar-chart-line-fill text-2xl transition cursor-pointer ${isExpertiseTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            <hr className='border border-white opacity-5 w-full' />

            <i onClick={() => setTabActive('contact')} className={`bi bi-send-fill text-2xl transition cursor-pointer ${isContactTabActive ? 'text-[#017c8f]' : 'text-white'} hover:text-[#017c8f] hover:scale-110`}></i>
            
          </nav>

          <div className='w-9/10 h-full bg-[#0d4952cc] rounded-sm flex items-start justify-start flex-col'>

            {
              isAboutTabActive ? (
                <AboutTab />
              ) : ""
            }
            
            {
              isResumeTabActive ? (
                <ResumeTab />
              ) : ""
            }
            
            {
              isWorksTabActive ? (
                <WorksTab />
              ) : ""
            }
            
            {
              isStatsTabActive ? (
                <StatsTab />
              ) : ""
            }
            
            {
              isExpertiseTabActive ? (
                <ExpertiseTab />
              ) : ""
            }
            
            {
              isContactTabActive ? (
                <ContactTab />
              ) : ""
            }

          </div>

        </div>

    </section>

  )

}


export default MainScreen