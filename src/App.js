import React from "react";
import Navbar from "./components/Navbar.js";
import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Form from "./components/Form.js";
import AboutUs from "./components/AboutUs.js";
const App = () => {
  return <>

  
    
  
  <Router>
  <Navbar/>
   
      <Routes>
      <Route path="/" exact element={<Form/>} />
      <Route path="/signin" exact element={<SignIn/>} />
      </Routes>
      <Routes>
      <Route path="/signup" exact element={<SignUp></SignUp>} />
      </Routes>
      <Routes>
      <Route path="/aboutus" exact element={<AboutUs/>} />
      </Routes>
    
  </Router>



  
  
  </>;
};

export default App;