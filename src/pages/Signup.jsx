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
  return ( 
<div> 

<div className='mb-3 mt-5'>
  <label htmlFor="exampleInputName" className="form-label">Name</label>
  <input
    type="text"
    onChange={(e) => setName(e.target.value)}
    placeholder='Enter Username'
    className="form-control"
    id="exampleInputName"
    aria-describedby="nameHelp"
  />
</div>

<div className="mb-3 mt-4">
  <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
  <input
    type="email"
    onChange={(e) => setEmail(e.target.value)}
    placeholder='Email'
    className="form-control"
    id="exampleInputEmail"
    aria-describedby="emailHelp"
  />
  <div id="emailHelp" className="form-text">
    We'll never share your email with anyone else.
  </div>
</div>

<div className="mb-3">
  <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
  <input
    type="password"
    onChange={(e) => setPassword(e.target.value)}
    className="form-control"
    id="exampleInputPassword1"
  />
</div>

<div className="mb-3 form-check">
  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
</div>
</div>
);
}

export default Signup;

 