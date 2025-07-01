import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import {Suspense, lazy} from "react"
import Home from './Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Loading from './Components/Loading'

const FallBackPage  = lazy(()=> import("./Components/FallBackPage"))
function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
       
          <Route path="notfound" element={
             <Suspense fallback={<Loading/>}>
            <FallBackPage/>
             </Suspense>
            } />
       
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
