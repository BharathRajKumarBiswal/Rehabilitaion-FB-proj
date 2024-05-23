import React, { useState } from 'react'

function Signup() {
  const [name, setName] = useState('')
  const [email,setEmail] = useState('')
  const [number, setNumber] = useState('')
  const [password, setPassword] = useState('')

  return (
    <div className='login'>
      
      <form  className='form'>
        <label> Name : </label>
        <input type='text' placeholder='Enter your Name' value={name} onChange={(e) => { setName(e.target.value) }} /><br></br>
        <label> Email : </label>
        <input type='email' placeholder='Enter your Email' value={email} onChange={(e)=>{setEmail(e.target.value)}} /> <br></br>
        <label>Number : </label>
        <input type='number' placeholder='Enter Your Number' value={number} onChange={(e) => { setNumber(e.target.value) }} /> <br></br>
        <label> Password : </label>
        <input type='password' placeholder='Set your password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br></br>
        <button type='submit'> Submit </button>
      </form>
     
    </div>
  )
}

export default Signup
