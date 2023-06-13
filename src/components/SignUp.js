import React, { useState } from 'react'
import { account } from '../server/backend.js'
import '../css/signdesign.css'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  
  const history =useNavigate();

  //use state to set user detals.
  const [user,setUser] = useState({
    name:"",
    email:"",
    password:""
  });
  
  //signup function.

  const signupUser =async(e) =>{
    e.preventDefault();
   try {
    await account.create(
      uuidv4(),
      user.email,
      user.password,
      user.name,
    )
    creatingEmailSession();
   } catch (error) {
    console.log(error);
   }     
  }

  const creatingEmailSession= async()=>{
    try {
      await account.createEmailSession(user.email,user.password);
      history("/");
    } catch (error) {
      console.log(error);
    }
  }
  
  return (
    <div class="signdesign">
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{"color": "#709085;"}}></i>
          <span class="h1 fw-bold mb-0">Please register here.</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{"width": "23rem;"}}>

            

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example18">Your Name</label>
              <input type="text" id="name" name="name"  class="form-control form-control-lg" onChange={(e)=>{
                setUser({
                  ...user,
                  name : e.target.value
                })
              }}/>
            </div>


            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example18">Email address</label>
              <input type="text"  class="form-control form-control-lg" onChange={(e)=>{
                setUser({
                  ...user,
                  email : e.target.value
                })
              }} />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example28">Password</label>
              <input type="password" id="password"  name="password"class="form-control form-control-lg" onChange={(e)=>{
                setUser({
                  ...user,
                  password:e.target.value
                })
              }} />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example28">Confirm your Password</label>
              <input type="password" id="confirmPassword" name="confirmPassword"class="form-control form-control-lg"/>
            </div>

            <div class="pt-1 mb-4">
              
              <button class="btn btn-info btn-lg btn-block" type="button" onClick={signupUser} >Register Now</button>
            </div>

          </form>

        </div>

      </div>
    
    </div>
  </div>
</section>
</div>

  )
}
