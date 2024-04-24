import React from "react";
import Post from "./Post";
import { ClipLoader } from "react-spinners";

const PostList = ({ posts, images, loading }) => {
  return (
    <div className="post-list">
      {posts.map((post, i) => {
        return (
          <>
            <Post
              key={posts[i].id}
              id={posts[i].id}
              title={posts[i].title}
              body={posts[i].body}
              image={images[i].url}
            />
            <hr className="white " />
          </>
        );
      })}

      {loading && (
        <div className="loading-indicator">
          {" "}
          <ClipLoader color="#00bfff" size={25} />
          <span>Loading more posts...</span>
        </div>
      )}
    </div>
  );
};

export default PostList;
