import React, { useEffect, useState } from 'react'
import { account } from '../server/backend';
import Profile from './Profile';
import { useNavigate } from 'react-router-dom';
export default function Navbar() {

  const history = useNavigate();
  const [userDetails, setuserDetails] = useState();

const fetchUser = async()=>{
  try {
    const data =  await account.get();
    console.log(data.length);
    setuserDetails(data);
  } catch (error) {
    
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
    <nav class="navbar navbar-expand-lg navbar-light " style={{"background-color":"#ece4e4;"}}>
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Photo Sharing</a>
    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

      {userDetails?( 
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
    </div>)
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
