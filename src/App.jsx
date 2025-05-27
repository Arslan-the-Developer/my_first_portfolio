import react, {Suspense, lazy } from 'react'
import {PuffLoader} from 'react-spinners'


const MainScreen = lazy(() => import('./Screens/MainScreen/MainScreen'));


function App() {
  

  return (

    <Suspense fallback={
      <section className='w-full h-screen bg-dull flex items-center justify-center'>

        <PuffLoader color={'#fca311'} size={120} />

      </section>
    }>

      <section className='w-full flex items-center justify-center'>

        <MainScreen />

      </section>

    </Suspense>
  
  )

}


export default App
