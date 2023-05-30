
import React, { useState } from 'react'
import { account } from '../server/backend.js'
export default function Login() {
  
  //use state to set user detals.
  const [user,setUser] = useState({
    email:"",
    password:""
  });
  
  //signIn function.

  const  signInUser =async (e) =>{

    e.preventDefault();

    //creating a email session.
    try {
      await account.createEmailSession(
        user.email,
        user.password,
      )
      var userName = account.get(user.email);
      console.log((await userName).name);
    } catch (error) {
      console.log(error);
    }
  }




  return (
    <section class="vh-100">
  <div class="container-fluid">
    <div class="row">
      <div class="col-sm-6 text-black">

        <div class="px-5 ms-xl-4">
          <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{"color": "#709085;"}}></i>
          <span class="h1 fw-bold mb-0">Sign In</span>
        </div>

        <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

          <form style={{"width": "23rem;"}}>

            

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example18">Email address</label>
              <input type="email" id="form2Example18" onChange={(e)=>{
                setUser({
                  ...user,
                  email : e.target.value
                })

              }} class="form-control form-control-lg" />
            </div>

            <div class="form-outline mb-4">
              <label class="form-label" for="form2Example28">Password</label>
              <input type="password" id="form2Example28" onChange={(e)=>{
                setUser({
                  ...user,
                  password:e.target.value
  
                })
                }} class="form-control form-control-lg" />
            </div>

            <div class="pt-1 mb-4">
              <button class="btn btn-info btn-lg btn-block" onClick={signInUser} type="button">Login</button>
            </div>

            <p class="small mb-5 pb-lg-2"><a class="text-muted" href="#!">Forgot password?</a></p>
            <p>Don't have an account? <a href="/signup" class="link-info">Register here</a></p>

          </form>

        </div>

      </div>
    
    </div>
  </div>
</section>
  )
}
