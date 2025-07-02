import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Suspense, lazy} from "react"

import Header from './Components/Header'
// import Footer from './Components/Footer'
import Loading from './Components/Loading'
import Mainloading from './Components/Mainloading'
const Home = lazy(()=> import("./Home"))
const FallBackPage  = lazy(()=> import("./Components/FallBackPage"))
function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={
          <Suspense fallback={<Mainloading/>}>
            <Home/>
          </Suspense>
        } />
       
          <Route path="notfound" element={
             <Suspense fallback={<Loading/>}>
            <FallBackPage/>
             </Suspense>
            } />
       
      </Routes>
      {/* <Footer/> */}
    </Router>
  )
}

export default App
