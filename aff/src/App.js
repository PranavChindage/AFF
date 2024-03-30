import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage/Homepage';
import ACL from './Components/AiroliChampionsLeague/ACL';
import ASC from './Components/AiroliSuperCup/ASC';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import Navbar from './Components/Navbar/Navbar';
import ACLBg from './img/ACL-Bg.png'; // Import the image file

const App = () => {
  return (
    <BrowserRouter>
      <div
        style={{
          backgroundImage: `url(${ACLBg})`,
          zIndex:'-1',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          overflowX: 'hidden',
          cursor: 'default',
          position: 'fixed',
          minWidth: '320px',
          lineHeight: '1.4285em',
          height: '100%',
          width: '100%',
          margin: '0',
          padding: '0',
          boxSizing: 'border-box'
        }}
      >
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />  
          <Route path="/ACL" element={<ACL />} />  
          <Route path="/ASC" element={<ASC />} />  
          <Route path="/Season1Acl" element={<ACL />} />  
          <Route path="/Season2Acl" element={<ACL />} />  
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
