import react, { useEffect, useState, Suspense, lazy } from 'react'
import axios from 'axios'
import Squares from '../src/Components/ReactBitComponents/Squares/Squares';

const MainScreen = lazy(() => import('./Screens/MainScreen/MainScreen'));


function App() {
  

  return (

    <section className='w-full relative h-screen bg-linear-to-b from-primary to-less-primary text-secondary flex flex-col items-center justify-center text-2xl'>

      <div className='w-full h-full absolute opacity-100'>

      <Squares
      speed={0.5} 
      squareSize={35}
      direction='right' // up, down, left, right, diagonal
      borderColor='#09343b'
      hoverFillColor='#05191c'
      />
      
      </div>

      <MainScreen />
      
    </section>
  
  )

}


export default App
