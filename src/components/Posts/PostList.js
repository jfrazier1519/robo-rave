import React from "react";
import Post from "./Post";

const PostList = ({ posts, images }) => {
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
    </div>
  );
};

export default PostList;
