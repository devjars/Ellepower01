import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from './Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
function App() {

  return (

    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Footer/>
    </Router>
  )
}

export default App
