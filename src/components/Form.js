import React from 'react'

export default function Form() {
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
                <input type="text"class="form-control form-control-lg" />
              </div>
  
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example18">Message</label>
                <input type="text"  class="form-control form-control-lg"  />
              </div>
  
              <div class="form-outline mb-4">
                <label class="form-label" for="form2Example28">Tags</label>
                <input type="text" class="form-control form-control-lg"/>
              </div>
  
              <div class="form-outline mb-4">
              <label for="formFileLg" class="form-label">Upload here.</label>
<input class="form-control form-control-lg" id="formFileLg" type="file" />
              </div>
  
              <div class="pt-1 mb-4">
                
                <button class="btn btn-info btn-lg btn-block" type="button" >Submit</button>
              </div>
  
            </form>
  
          </div>
  
        </div>
      
      </div>
    </div>
  </section>
  )
}
