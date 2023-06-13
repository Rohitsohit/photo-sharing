
import React, { useState } from 'react'
import { databases } from '../server/backend.js'
import { account } from '../server/backend.js';
import {ID} from "appwrite"
import { storages } from '../server/backend.js';
import { useNavigate } from 'react-router-dom';
import '../css/signdesign.css'
export default function Form() {
  const history =useNavigate();
const [dataDetails, setdataDetails] = useState({
  title:"",
  description :"",
  tags : "",
  selectedImage :"",
  creator:""
});

const handleSubmit = async(e)=>{
  e.preventDefault();
  const data =  await account.get();
  dataDetails.creator=data.email;
  console.log(dataDetails);
  const promise = databases.createDocument("64726e64bf00cc8601ea","647e461bd6a5c4d5166a",ID.unique(),dataDetails);
  promise.then(
    function (response) {
      console.log(response);
        history('/');
    },
    function (error) {
      console.log(error);
    }
  )
}
const uploadfile=async(e)=>{
  e.preventDefault();
  const file = e.target.files[0];
  const promise = await storages.createFile('648637dfc82c23415868', ID.unique(), file);
  setdataDetails({...dataDetails,selectedImage:promise.$id})
}

  return (
    <div className='signdesign' >
    <section class="vh-100">
    <div class="container-fluid">
      <div class="row">
        <div class="col-sm-6 text-black">
  
          <div class="px-5 ms-xl-4">
            <i class="fas fa-crow fa-2x me-3 pt-5 mt-xl-4" style={{"color": "#709085;"}}></i>
            <span class="h1 fw-bold mb-0">Share Your Photo.</span>
          </div>
  
          <div class="d-flex align-items-center h-custom-2 px-5 ms-xl-4 mt-5 pt-5 pt-xl-0 mt-xl-n5">
  
            <form style={{"width": "23rem;"}}>
  
              
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18">Title</label>
                <input type="text"class="form-control form-control-lg" onChange={(e)=>{
                  setdataDetails({
                    ...dataDetails,
                    title:e.target.value,
                })
                }} />
              </div>
  
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18">Message</label>
                <input type="text"  class="form-control form-control-lg" onChange={(e)=>{
                  setdataDetails({
                    ...dataDetails,
                    description:e.target.value
                })
                }}  />
              </div>
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Tags</label>
                <input type="text" class="form-control form-control-lg" onChange={(e)=>{
                  setdataDetails({
                    ...dataDetails,
                    tags:e.target.value
                })
                }}/>
              </div>
  
              <div class="form-outline mb-4">
              <label for="formFileLg" class="form-label">Upload here.</label>
 <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={uploadfile} /> 
             
              </div>
  
              <div class="pt-1 mb-4">
                
                <button class="btn btn-info btn-lg btn-block" type="button" onClick={handleSubmit}>Submit</button>
              </div>
  
            </form>
  
          </div>
  
        </div>
      
      </div>
    </div>
  </section>
  </div>
  )
}
