import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';


const Footer = () => {
  return (
   <footer>
    <section className='footer-header'>
      <div className='footer-header-title'>
        <span class>Get connected with us on social networks:</span>
      </div>

      <div className='instalogo'>
        <a href=''>
        <FaInstagram  />    
        </a>
      </div>
    
    </section>
    <hr />
    <section className='footer-content'>
      <footer-container className='footer-left-container'>
        <footer-row className='mt-3'>
          {/* Footer columns */}
        </footer-row>
      </footer-container>
    </section>
    <div className='footer-bottom' >
          © 2021 Copyright:
          <a className='bottom-company-link' href='https://mdbootstrap.com/'>
            MDBootstrap.com
          </a>
      </div>
    </footer> 
  );
};

export default Footer;
