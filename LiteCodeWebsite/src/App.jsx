import React from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Services from './pages/Services'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './pages/Home'

const App = () => {
  return (
    <>
    <Router>
      <Navbar />
      <main className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </main>
      <Footer />
    </Router>
    </>
  )
}

export default App