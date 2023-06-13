import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Navbar from "./Navbar"
import { account, databases } from '../server/backend.js'
export default function Home() {
  
  //creating a empty array intial to solve the undefiend error 
  const [postData, setpostData] = useState([{}]);
  const [isUser, setIsUser] = useState(false);

  useEffect(() => {
    
    const getPosts = databases.listDocuments("64726e64bf00cc8601ea","647e461bd6a5c4d5166a");
    getPosts.then(
      function (response) {
      setpostData(response.documents)
    }, function (error) {
      console.log(error); // Failure
    }); 

    const getuser = account.get();
    getuser.then(
      function (response) {
      setIsUser(true);
    }, function (error) {
      console.log(error); // Failure
    });
    
  },[])


  console.log(isUser)
  return (
   
   <div>
      <Navbar></Navbar>
      <div className = "row my-5">
     {
      !postData.length ?(<p>loading...</p>):(
        
        postData.map(post =>(
          
     <ImageCard post={post} user="isUser"></ImageCard>     
     ))) 
     
    }
    </div>   
   </div>
  )
}
