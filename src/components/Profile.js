import React, { useEffect, useState } from 'react'
import { account } from '../server/backend';

export default function Profile() {


    
    
    
const logoutUser=async(e)=>{
    e.preventDefault();
    try {
        await account.deleteSessions("current");
    } catch (error) {
        console.log(error);
    }
}


  return (
    <div class="dropdown">
    <a
      class="dropdown-toggle d-flex align-items-center hidden-arrow"
      href="#"
      id="navbarDropdownMenuAvatar"
      role="button"
      data-mdb-toggle="dropdown"
      aria-expanded="false"
    >
      <img
        src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
        class="rounded-circle"
        height="25"
        alt="Black and White Portrait of a Man"
        loading="lazy"
      />
    </a>
    <ul
      class="dropdown-menu dropdown-menu-end"
      aria-labelledby="navbarDropdownMenuAvatar"
    >
      <li>
        <a class="dropdown-item" href="#">About Me</a>
      </li>
      <li>
        <a class="dropdown-item" href="/" onClick={logoutUser}>Logout</a>
      </li>
    </ul>
  </div>
  )
}
