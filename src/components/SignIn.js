
import React, { useState } from 'react'
import { account } from '../server/backend.js'
import { useNavigate } from 'react-router-dom';
import '../css/signdesign.css'
import Toast from './Toast.js';
export default function Login() {
  const history = useNavigate();
  //use state to set user detals.
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState();

  //signIn function.
  const signInUser = async (e) => {
    e.preventDefault();
    //creating a email session.
    try {
      await account.createEmailSession(
        user.email,
        user.password,
      )
      history("/");
    } catch (error) {
      setError(error);
      
    }
   
  }
  return (
    <div class="signdesign"> 
    <section class="vh-100">
      <div class="container-fluid">
        <div class="row">
          <div class="col-sm-6 text-black">

            <div class="px-5 ms-xl-4">

              <span class="h1 fw-bold" className='headingcolor'>Sign In : </span>
            </div>

            <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">

              <form style={{ "width": "23rem;" }}>



                <div class="form-outline mb-4">
                  <label class="form-label" className='textcolor' for="form2Example18">Email address</label>
                  <input type="email" id="form2Example18" onChange={(e) => {
                    setUser({
                      ...user,
                      email: e.target.value
                    })

                  }} class="form-control form-control-lg" />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" className='textcolor' for="form2Example28">Password</label>
                  <input type="password" id="form2Example28" onChange={(e) => {
                    setUser({
                      ...user,
                      password: e.target.value

                    })
                    
                  }} class="form-control form-control-lg" />
                  <Toast error={error}></Toast>
                </div>

                <div class="pt-1 mb-4">
                  <button class="btn btn-info btn-lg btn-block"  onClick={signInUser} type="button">Login</button>
                </div>

                <p class="small mb-5 pb-lg-2"><a class="text-muted" className='textcolor' href="#!">Forgot password?</a></p>
                <p className='textcolor'>Don't have an account? <a href="/signup" className='textcolor' class="link-info">Register here</a></p>

              </form>

            </div>

          </div>

        </div>
      </div>
    </section>

    </div>
  )
}
