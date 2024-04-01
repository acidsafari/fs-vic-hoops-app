import React from "react";
import ContactUs from "./ContactUs";
import './Footer.css';

const Footer = () => {
  return (
    <div className='MainAside'>
      <div className="Footer">
        <small>©Copyright 2024 by Samuel Klett Navarro<br/>
          All rights reversed.</small>
      </div>
      <ContactUs />
    </div>
    
  );
}

export default  Footer;