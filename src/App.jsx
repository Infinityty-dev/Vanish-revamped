
import './App.css'
// import Home from './pages/Home/Home.jsx'

import Header from './Component/Header.jsx'
import Footer from './pages/Footer.jsx'
import {BrowserRouter, Routes, Route} from "react-router-dom"
// // import SignUp from './Pages/Signup/Signup'
import Team from './pages/Team.jsx'
import Home from './pages/Home/Home.jsx'
import OrderAssessment from './pages/orderAssessment.jsx'

function App() {

  return (
    <>
     <BrowserRouter>
         <Header/>
         <Routes>
          
            <Route path="/" element={<Home/>} />
            <Route path="/about-us" element={<Team />} />
            <Route path="/order-assessment" element={<OrderAssessment/>} />
       </Routes>
       <Footer/>
       </BrowserRouter>

    </>
  )
}

export default App
