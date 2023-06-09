import React, { useEffect, useState } from 'react'
import ImageCard from './ImageCard'
import Navbar from "./Navbar"
import { databases } from '../server/backend.js'
export default function Home() {
  
  //creating a empty array intial to solve the undefiend error 
  const [postData, setpostData] = useState([{}]);
  
  
  useEffect(() => {
    
    const getPosts = databases.listDocuments("64726e64bf00cc8601ea","647e461bd6a5c4d5166a");
    getPosts.then(function (response) {
      setpostData(response.documents)
      console.log(response);
    }, function (error) {
      console.log(error); // Failure
    }); 
    
  },[])
  
  console.log(postData)
  
  return (
   
   <div>
      <Navbar></Navbar>
      <div className = "row my-5">
     {
      !postData.length ?(<p>loading</p>):(
        postData.map(post =>(
     <ImageCard post={post}></ImageCard>     
     )))     
    }
    </div>   
   </div>
  )
}
