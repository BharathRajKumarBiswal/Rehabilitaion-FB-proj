import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Programs() {
  return (
    <div>
      <h1 style={{color:'white'}}> Treament Services </h1>
      <p style={{fontSize:'30px',  color:'whitesmoke' }}>
      Everyone Deserves A <br></br> Second Chance At Life
      </p>
      <div className='services'>
      <div>
      <FontAwesomeIcon icon="fa-solid fa-prescription-bottle-medical" style={{color: "#74C0FC",}} />
     <h1> Drugs Addiction </h1>
    <p> At Heal-Bird Rehabilitation Center, we provide personalized, compassionate care to help individuals overcome drug addiction and reclaim their lives. Our comprehensive approach ensures a supportive environment for lasting recovery. </p>
    <button> Read More </button>
    </div>
    <div>
    <FontAwesomeIcon icon="fa-solid fa-champagne-glasses" />
    <h1> Alcohol Addiction </h1>
    <p>  At Heal-Bird Rehabilitation Center, we offer compassionate and comprehensive treatment to help individuals overcome alcohol addiction and achieve lasting recovery. </p>
   <button> Read More </button>
    </div>
    <div>
    <FontAwesomeIcon icon="fa-solid fa-people-roof" style={{color: "#FFD43B",}} />
    <h1>Family Recovery </h1>
    <p>At Heal-Bird Rehabilitation Center, our Family Recovery Program supports both individuals and their loved ones, fostering healing and rebuilding relationships impacted by addiction</p>
    <button> Read More </button>
    </div>
      </div>
    </div>
  )
}

export default Programs
