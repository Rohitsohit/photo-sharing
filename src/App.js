import React from "react";

import SignIn from "./components/SignIn.js";
import SignUp from "./components/SignUp.js";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import AboutUs from "./components/AboutUs.js";
import Test from "./components/Test.js";

import Home from "./components/Home.js";
import Form from "./components/Form.js";
const App = () => {
  return <> 
  <Router>
  {/* <Navbar/> */}
   
      <Routes>
      <Route path="/" exact element={<Home/>} />
      <Route path="/signin" exact element={<SignIn/>} />
      </Routes>
      <Routes>
      <Route path="/signup" exact element={<SignUp></SignUp>} />
      </Routes>
      <Routes>
      <Route path="/aboutus" exact element={<AboutUs/>} />
      </Routes>
      <Routes>
      <Route path="/post" exact element={<Form/>} />
      </Routes>
    
  </Router>



  
  
  </>;
};

export default App;