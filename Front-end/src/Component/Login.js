import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  
 const nav = useNavigate()

  return (

    <div className='login'>
     
    
        <form className='form'>
          
          <label> Email : </label>
          <input type='email' placeholder='Enter Your Email' value={email} onChange={(e) => { setEmail(e.target.value) }} /> <br></br>
          <label> Password : </label>
          <input type='password' placeholder='Enter your password' value={password} onChange={(e) => { setPassword(e.target.value) }} /> <br></br>
          <button type='submit'> Submit </button>
          
        </form>
         <br></br>
        New User Please Sign Up? <button onClick={()=>{nav('/signup')}}> Sign Up </button>

      
      
    </div>
  )
}

export default Login
