import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import About from './pages/About';
import Contact from './pages/Contact';
const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/navbar" element={<Navbar />} />
          <Route path="/footer" element={<Footer />} />
          <Route path="/contact" element={<Contact />} />
        
 
        </Routes>
      </div>
    </BrowserRouter>
  ) 
}
export default App