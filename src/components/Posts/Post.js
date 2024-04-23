import React from "react";
import "./Post.css";

const Post = ({ id, title, body, image }) => {
  return (
    <div className="card mb-3">
      <div className="img-container">
        <img src={image} className="image" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
