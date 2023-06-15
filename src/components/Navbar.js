import React, { useEffect, useState } from 'react'
import { account } from '../server/backend';
import { useNavigate } from 'react-router-dom';
import '../css/design.css'
export default function Navbar() {

  const history = useNavigate();
  
  const [userDetails, setuserDetails] = useState();

const fetchUser = async()=>{
  try {
    const data =  await account.get();
    setuserDetails(data);
  } catch (error) {
    console.log(error)
  }
}
    useEffect(() => {
        fetchUser();    
    },[])


    const logoutUser=async(e)=>{
      e.preventDefault();
      try {
          await account.deleteSessions("current");
          setuserDetails(null)
          history("/");
      } catch (error) {
          console.log(error);
      }
  }
  return (
    <>   
    <nav class="navbar navbar-expand-lg navbar-light transparent-navbar" style={{"background-color":"#ece4e4;"}}>
  <div class="container-fluid">
    <a class="navbar-brand" className='navbarname' href="/">Photo Sharing</a>
    
    
   

      {userDetails?( 
        <div >

        <ul class="navbar-nav d-flex flex-row me-1">
          <li class="nav-item me-3 me-lg-0">
          <a href="/post" class="navbar-brand">
          <svg xmlns="http://www.w3.org/2000/svg" href='/' width="40" height="40" fill="currentColor" class="bi bi-file-earmark-plus mx-5 mx-5" viewBox="0 0 16 16">
            <path  d="M8 6.5a.5.5 0 0 1 .5.5v1.5H10a.5.5 0 0 1 0 1H8.5V11a.5.5 0 0 1-1 0V9.5H6a.5.5 0 0 1 0-1h1.5V7a.5.5 0 0 1 .5-.5z"/>
            <path  href='/' d="M14 4.5V14a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h5.5L14 4.5zm-3 0A1.5 1.5 0 0 1 9.5 3V1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V4.5h-2z"/>
             </svg>
             </a>
          </li>
          <li class="nav-item me-3 me-lg-0">
          <div class="dropdown-toggle" data-bs-toggle="dropdown">
        <img
          src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
          class="rounded-circle"
          height="25"
          alt="Black and White Portrait of a Man"
          loading="lazy"
        />    
      <ul
        class="dropdown-menu dropdown-menu-end"
        aria-labelledby="navbarDropdownMenuAvatar"
      >
        <li>
          <a class="dropdown-item" onClick={logoutUser} >Logout</a>
        </li>
        <li>
          <a class="dropdown-item" href="/aboutus">About Us.</a>
        </li>
      </ul>
    </div>
          </li>
        </ul>



        
    </div>
    
    )
      :(
      <ul class="navbar-nav d-flex flex-row me-1">
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="signin">SignIn</a>
        </li>
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="/signup">SignUp</a>
        </li>
      </ul>)
      }
    </div>
</nav>
    </>
  )
}
