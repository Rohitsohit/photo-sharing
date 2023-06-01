import React, { useEffect, useState } from 'react'
import { account } from '../server/backend';
import Profile from './Profile';
import Test from './Test';


export default function Navbar() {

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
      
    }, [])


    console.log(userDetails);

  return (
    <>   
    {/* <nav class="navbar navbar-expand-lg navbar-light " style={{"background-color":"#ece4e4;"}}>

  <div class="container-fluid">


    <a class="navbar-brand" href="/">Photo Sharing</a>


    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

    <Profile/>
   
      {userDetails?<Profile/>:
      
      <ul class="navbar-nav d-flex flex-row me-1">
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="signin">SignIn</a>
        </li>
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="/signup">SignUp</a>
        </li>
      </ul>
      }
    </div>
</nav> */}

<Test></Test>
    
    
    
    </>
  )
}
