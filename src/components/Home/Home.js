import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SideNav from "../Navigation/SideNav";
import PostList from "../Posts/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="w-30">
          <SideNav />
        </div>
        <div className="p-3 w-40">
          <PostList posts={posts} />
        </div>
      </div>
    </>
  );
};

export default Home;
