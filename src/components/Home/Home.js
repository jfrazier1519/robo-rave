import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SideNav from "../Navigation/SideNav";
import PostList from "../Posts/PostList";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
    };
    fetchPosts();

    const fetchImages = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/photos"
      );
      const data = await response.json();
      setImages(data);
    };
    fetchPosts();
    fetchImages();
  }, []);

  return (
    <>
      <Navbar />
      <div className="d-flex">
        <div className="w-25">
          <SideNav />
        </div>
        <div className="list-holder rounded">
          <div className="p-3 w-100 ">
            <PostList posts={posts} images={images} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
