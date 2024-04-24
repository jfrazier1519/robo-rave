import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SideNav from "../Navigation/SideNav";
import PostList from "../Posts/PostList";
import "./Home.css";
import Container from "../PopularCommunities/PopularCommunities";
import PopularCommunities from "../PopularCommunities/PopularCommunities";

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
    <div className="main-container">
      <div className="nav-container">
        <Navbar />
      </div>
      <div className="body-container">
        <div className="d-flex">
          <div className="w-25">
            <SideNav />
          </div>
          <div className="list-holder p-3 rounded">
            <PostList posts={posts} images={images} />
          </div>
          <div>
            <PopularCommunities />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
