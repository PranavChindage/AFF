import React from 'react';
import './Footer.css'; // Import your CSS file for styling
import { FaInstagram } from 'react-icons/fa'; // For Font Awesome Instagram icon

// You can import other icons similarly


const Footer = () => {
  return (
   <footer>
    <section className='footer-header'>
    <div className='footer-header-title'>
      <span style={{font:"bold"}}>Get connected with us </span>
    </div>

    <div>
      <a href='' className='instalogo'>
      <FaInstagram />
      </a>
    </div>
    
  </section>
  <hr />
  <section className='footer-content'>
    <footer-container className='footer-left-container'>
      <footer-row className='mt-3'>
        <footer-col md="3" lg="4" xl="3" className='footer-company-description'>
          <h6 className='footer-title' style={{fontSize:"30px"}}>
             AFF
          </h6>
        </footer-col>

        <footer-col md="2" lg="2" xl="2" className='footer-products'>
          <h6 className='footer-title'>Leagues</h6>
          <p>
            <a href='#!' className='product-1'>
              Airoli Champions League
            </a>
          </p>
          <p>
            <a href='#!' className='product-2'>
              Airoli Super Cup
            </a>
          </p>
        </footer-col>

        <footer-col md="3" lg="2" xl="2" className='footer-useful-links'>
          <h6 className='footer-title'>Link</h6>
          <p>
            <a href='#!' className='link-1'>
              Pricing
            </a>
          </p>
          <p>
            <a href='#!' className='link-2'>
              Settings
            </a>
          </p>
        </footer-col>

        <footer-col md="4" lg="3" xl="3" className='footer-contact'>
          <h6 className='footer-title'>Contact</h6>
          <p>
            airolifootballfront@gmail.com
          </p>
        </footer-col>
      </footer-row>
    </footer-container>
  </section>
  <div className='footer-bottom' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2021 Copyright:
        <a className='bottom-company-link' href='https://aff.in'>
          AFF
        </a>
    </div>
  </footer> 
  );
};

export default Footer;
