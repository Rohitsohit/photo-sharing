import React from "react";
import Navbar from "./components/Navbar.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
const App = () => {
  return <>

  
    
  
  <Router>
  <Navbar/>
      {/* <Routes>
      <Route path="/" exact element={<Productview/> } />
      </Routes> */}
      <Routes>
      <Route path="https://cheery-torte-5cff90.netlify.app/signin" exact element={<SignIn/>} />
      </Routes>
      <Routes>
      <Route path="/signup" exact element={<SignUp></SignUp>} />
      </Routes>
    
    
  </Router>



  
  
  </>;
};

export default App;