import React, { useState, useEffect } from 'react'
import '../css/comment.css'
import { useParams } from 'react-router-dom';
import { databases } from '../server/backend';
import { storages } from '../server/backend';
import CommentView from './CommentView';

export default function Comment(props) {
  var imageUrl = 'https://cloud.appwrite.io/v1/storage/buckets/648637dfc82c23415868/files/64863be39175f4fe1ad0/view?project=646b9fc751da58eace96&mode=admin';



  const { postId, name } = useParams();
  const [postDetails, setPostDetails] = useState();

  var commentObj = {
    message:"",
    username:""
  }
   


  if (postDetails) {
    const result = storages.getFilePreview('648637dfc82c23415868', postDetails.selectedImage);
    imageUrl = result.href;
  }

  useEffect(() => {
    const promise = databases.getDocument("64726e64bf00cc8601ea", "647e461bd6a5c4d5166a", postId);
    promise.then(function (response) {
      // Success
      setPostDetails(response);
    }, function (error) {
      console.log(error); // Failure
    });

  }, [])

  const hanleSend = async (e) => {
    e.preventDefault();
    let updateDocument = {
      comment: []
    }
    postDetails.comment.push(JSON.stringify(commentObj));
    updateDocument.comment = postDetails.comment;
    await databases.updateDocument("64726e64bf00cc8601ea", "647e461bd6a5c4d5166a", postId, updateDocument);
  }

  console.log(postDetails);

  return (
    <>
      {!postDetails ? (
  <p>loading..</p>
) : (
  <div class="container">
    <div class="component">
      <section className="cards">
        <article className="card card--1">
          <div className="card__info-hover">
            <svg className="card__like" viewBox="0 0 24 24">
              <path
                fill="#000000"
                d="M12.1,18.55L12,18.65L11.89,18.55C7.14,14.24 4,11.39 4,8.5C4,6.5 5.5,5 7.5,5C9.04,5 10.54,6 11.07,7.36H12.93C13.46,6 14.96,5 16.5,5C18.5,5 20,6.5 20,8.5C20,11.39 16.86,14.24 12.1,18.55M16.5,3C14.76,3 13.09,3.81 12,5.08C10.91,3.81 9.24,3 7.5,3C4.42,3 2,5.41 2,8.5C2,12.27 5.4,15.36 10.55,20.03L12,21.35L13.45,20.03C18.6,15.36 22,12.27 22,8.5C22,5.41 19.58,3 16.5,3Z"
              />
            </svg>
            <span className="card__time">0</span>
            <div className="card__clock-info">
              <svg className="card__clock" viewBox="0 0 24 24">
                <path d="M12,20A7,7 0 0,1 5,13A7,7 0 0,1 12,6A7,7 0 0,1 19,13A7,7 0 0,1 12,20M19.03,7.39L20.45,5.97C20,5.46 19.55,5 19.04,4.56L17.62,6C16.07,4.74 14.12,4 12,4A9,9 0 0,0 3,13A9,9 0 0,0 12,22C17,22 21,17.97 21,13C21,10.88 20.26,8.93 19.03,7.39M11,14H13V8H11M15,1H9V3H15V1Z" />
              </svg>
              <span className="card__time">15 min</span>
            </div>
          </div>
          <div className="card__img"></div>
          <a className="card_link">
            <div className="card__img--hover" style={{ backgroundImage: `url(${imageUrl})` }}></div>
          </a>
          <div className="card__info">
            <span className="card__category">{postDetails.title}</span>
            <h3 className="card__title">{postDetails.description}</h3>
            <span className="card__by">
              <a className="card__author" title="author">{postDetails.tags}</a>
            </span>
            <p> </p>
            <span className="card__by">
              by  <a className="card__author" title="author"> {postDetails.createdBy}</a>
            </span>
          </div>
        </article>
      </section>
    </div>

    <div class="component">
      <div class="d-flex justify-content-center pt-3 pb-2">
        <div class="searchbox-wrap">
          <input
            type="text"
            placeholder="write something..."
            onChange={(e) => {
              commentObj.message = e.target.value;
              commentObj.username = name;
            }}
          />
          <button onClick={hanleSend}><span>Send</span> </button>
        </div>
      </div>
    </div>

    <div class="component">
      {!postDetails.comment.length ? (<p>loading...</p>) : (
        postDetails.comment.map(comment => (
          <CommentView props={comment}></CommentView>
        ))
      )}
    </div>
  </div>
)}

    </>)
}