
import React, { useState } from 'react'
import { databases } from '../server/backend.js'
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from 'react-router-dom';
import FileBase from "react-file-base64";
export default function Form() {

const [dataDetails, setdataDetails] = useState({
  title:"",
  description :"",
  tags : "",
  // selectedImage :""
});

const handleSubmit = (e)=>{

  e.preventDefault();
  const promise = databases.createDocument("64726e64bf00cc8601ea","647e461bd6a5c4d5166a",uuidv4(),
    dataDetails
  );
  promise.then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  )
}
const uploadfile=async(e)=>{

  const file = e.target.files[0];
  const imageToBase64  =  await convertBase64(file);
  console.log(imageToBase64);
  // setdataDetails({...dataDetails,selectedImage:imageToBase64})
}
const convertBase64 = (file) =>{
  return new Promise((resolve,reject) =>{
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload=(()=>{
      resolve(fileReader.result);
    })

    fileReader.onerror=((error)=>{
      reject(error);
    })
  })
}






  return (
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
                    title : e.target.value
                })
                }} />
              </div>
  
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18">Message</label>
                <input type="text"  class="form-control form-control-lg" onChange={(e)=>{
                  setdataDetails({
                    ...dataDetails,
                    description : e.target.value
                })
                }}  />
              </div>
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Tags</label>
                <input type="text" class="form-control form-control-lg" onChange={(e)=>{
                  setdataDetails({
                    ...dataDetails,
                    tags : e.target.value
                })
                }}/>
              </div>
  
              <div class="form-outline mb-4">
              <label for="formFileLg" class="form-label">Upload here.</label>
 <input class="form-control form-control-lg" id="formFileLg" type="file" onChange={(e)=>{uploadfile(e)}}
              /> 
             
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
  )
}
