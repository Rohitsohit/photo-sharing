import React from 'react'

export default function CommentView(props) {
  var commentObj ={

  }
   commentObj = JSON.parse(props.props);
  console.log(!commentObj)
  
  
  return (
    <>
    {!commentObj?(<></>):(<div class="d-flex justify-content-center py-2">
      <div class="second py-2 px-2"> 
      <span class="text1">{commentObj.message} </span>
          <div class="d-flex justify-content-between py-1 pt-2">
            
              <div><img src="https://i.imgur.com/AgAC1Is.jpg" width="18"/><span class="text2">{commentObj.username}</span></div>
              <div><span class="text3">Upvote?</span><span class="thumbup"><i class="fa fa-thumbs-o-up"></i></span><span class="text4">3</span></div>
          </div>
      </div>
  </div> )
    }
    </> 
  )
}
