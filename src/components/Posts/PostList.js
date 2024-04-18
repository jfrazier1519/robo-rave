import React from "react";
import Post from "./Post";

const PostList = ({ posts }) => {
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
            />
            <hr className="white " />
          </>
        );
      })}
    </div>
  );
};

export default PostList;
