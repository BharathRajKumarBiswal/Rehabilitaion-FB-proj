import React from 'react';
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFeatherAlt } from '@fortawesome/free-solid-svg-icons';
import Aboutus from './Aboutus';
import Programs from './Programs';

function Home() {
  return (
    <div className='home'>
      <div className="left-side-text">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-left">
              <div className='logo'>
              <FontAwesomeIcon icon={faFeatherAlt} className="fa-bounce" style={{color: "#fde986"}} />
              <h1>Welcome To <br></br> Heal-Bird</h1>
              </div>
              <div className='main'>
                <h1>A Healthy Mind <br></br> Equals A Happy Life</h1>
              <p className="description">
              A rehabilitation center is a facility designed to help individuals recover from various physical, mental, or emotional conditions, including substance abuse, injuries, illnesses, or disabilities. These centers offer a range of therapeutic interventions, including medical care, counseling, therapy sessions, and educational programs, tailored to meet the specific needs of each individual. The goal of rehabilitation centers is to promote healing, recovery, and independence, empowering individuals to overcome challenges and improve their overall quality of life.
              </p>
              
              </div>
             
              <button className="btn explore-button" style={{ margin: '20px', padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}>
                Explore More <span style={{ marginLeft: '5px' }}>&rarr;</span>
                </button>
            </div>
          </div>
        </div>
      </div>
      <br />
      <Aboutus />
      {/* <Programs/> */}
    </div>
  );
}

export default Home;
