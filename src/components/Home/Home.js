import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SideNav from "../Navigation/SideNav";
import PostList from "../Posts/PostList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      console.log(data);
      setPosts(data);
    };
    fetchPosts();
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
