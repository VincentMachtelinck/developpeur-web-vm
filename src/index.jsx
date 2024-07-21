import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import Navbar from './Components/Navbar/Navbar';
import Homepage from './Pages/Homepage/Homepage';
import Projets from './Pages/Projets/Projets';
import CV from './Pages/CV/CV';
import Contact from './Pages/Contact/Contact';
import Footer from "./Components/Footer/Footer"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>  
        </main> 
        <Footer />   
    </BrowserRouter>
    
  </React.StrictMode>
);
