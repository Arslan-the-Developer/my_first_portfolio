import react, { useEffect, useState, Suspense, lazy } from 'react'
import axios from 'axios'
import Squares from '../src/Components/ReactBitComponents/Squares/Squares';

const MainScreen = lazy(() => import('./Screens/MainScreen/MainScreen'));


function App() {
  

  return (

    <Suspense fallback={
      <section className='w-full h-screen bg-dull flex items-center justify-center'>

        <h2 className='font-poppins text-2xl tracking-wider text-primary font-semibold'>Loading.....</h2>

      </section>
    }>

      <section className='w-full flex items-center justify-center'>

        <MainScreen />

      </section>

    </Suspense>
  
  )

}


export default App
