import React from "react";
import Navbar from "./components/Navbar.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
const App = () => {
  return <>

    <Navbar></Navbar>
    
  <SignUp></SignUp>
  <Router>
  <Navbar/>
      {/* <Routes>
      <Route path="/" exact element={<Productview/> } />
      </Routes> */}
      <Routes>
      <Route path="/signin" exact element={SignIn } />
      </Routes>
      <Routes>
      <Route path="/signup" exact element={SignUp } />
      </Routes>
    
    
  </Router>



  
  
  </>;
};

export default App;