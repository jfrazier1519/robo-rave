import React from "react";
import "./Post.css";

const Post = ({ id, title, body, image }) => {
  return (
    <div className="card mb-3">
      <div className="p-2">
        <img src={image} className="card-img-top image rounded" alt="..." />
      </div>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{body}</p>
        <p className="card-text">
          <small className="text-body-secondary">Last updated 3 mins ago</small>
        </p>
      </div>
    </div>
  );
};

export default Post;
