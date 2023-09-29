 import React from 'react'
 
 export default function Login() {
   return (
     <div>
       <form className='bg'>
       <p>Registration Form</p>
      <label>  <input type="text" placeholder='First Name' /> </label> <br /><br />
      <label>  <input type="text" placeholder='Last Name' /> </label> <br /><br />
      <label>  <input type="email" placeholder='Email' /> </label><br /><br />
      <label> <input type="password" placeholder='Password' /> </label> <br /><br />
      <button className='btn' type='submit'> Register</button>
    </form>
     </div>
   )
 }
 
 
 