import React, { useState } from 'react'
import axios from "axios"


function Signup() {
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")

  const handleSumbit = async(e) =>{
    e.preventDefault()
    try{
      const response = await axios.post("http://localhost:5000/api/auth/register",{name,email,password});
      console.log(response)
    }catch (error){
      console.log(error)
    }
  }
    return (<div>
        <form onSubmit={handleSumbit}>
     <div className='mb-3 mt-5'>
        <label for="exampleInputEmail1" class="form-label">Name</label>
        <input type="email" onChange={(e) => setName(e.target.value)} placeholder='Enter Username' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />   
  </div>
  <div class="mb-3 mt-4">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" onChange={(e) =>  setEmail(e.target.value)} placeholder='Email' class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" onChange={(e) =>  setPassword(e.target.value)} class="form-control" id="exampleInputPassword1" />
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" />
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Signup</button>
  <div className='mt-4'>
  <p>Already Have Account? <a href='@'>Login</a></p>
  </div>
</form>
    </div>);
}

export default Signup;