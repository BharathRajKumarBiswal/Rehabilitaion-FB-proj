// src/components/Aboutus.js
import React from 'react';
import abt1 from '../Image/abt1.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import './Aboutus.css';

function Aboutus() {
  return (
    <div className="aboutus container" id="about-us">
      
        <div className="col-md-6 text-section">
          <h2 >About Us</h2>
          <h1>The Most Important Thing Is To Get Well Again</h1>
          <p>
            Welcome to Heal-Bird, a premier facility dedicated to providing compassionate and comprehensive rehabilitation services. Our mission is to empower individuals on their journey to recovery, helping them regain independence, improve their quality of life, and achieve their fullest potential.
          </p>
          <button className="btn btn-primary">
            <FontAwesomeIcon icon={faPhone} style={{ color: "#030303" }} /> Call Now: 9346613353
          </button>
        </div>

        <div className="col-md-6 image-section">
          <img src={abt1} alt="About Us" className="img-fluid rounded" style={{height:'400px', width:'400px'}} />
        </div>
     
    </div>
 
  );
}

export default Aboutus;
