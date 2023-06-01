import React, { useEffect, useState } from 'react'
import { account } from '../server/backend';

export default function Profile() {
  const [userDetails, setuserDetails] = useState();

  useEffect(() => {
    
      const getData = account.get();
      getData.then(
          function(response){
              setuserDetails(response);
          },
          function(error){
              console.log(error);
          }
      )
    
  },[])


    
const logoutUser=async(e)=>{
    e.preventDefault();
    try {
        await account.deleteSessions("current");
    } catch (error) {
        console.log(error);
    }
}


  return (
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
  )
}
