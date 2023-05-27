import React from 'react'


export default function Navbar() {
  return (
    <>
    


   
    <nav class="navbar navbar-expand-lg navbar-light " style={{"background-color":"#ece4e4;"}}>

  <div class="container-fluid">


    <a class="navbar-brand" href="/">Photo Sharing</a>


    <button class="navbar-toggler" type="button" data-mdb-toggle="collapse" data-mdb-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <i class="fas fa-bars"></i>
    </button>

  
    

       
   


      <ul class="navbar-nav d-flex flex-row me-1">
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="signin">SignIn</a>
        </li>
        <li class="nav-item me-3 me-lg-0">
          <a class="nav-link" href="/signup">SignUp</a>
        </li>
      </ul>

    </div>


</nav>


    
    
    
    </>
  )
}
