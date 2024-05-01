import React, { useState, useEffect } from "react";
import Navbar from "../Navigation/Navbar";
import SideNav from "../Navigation/SideNav";
import PostList from "../Posts/PostList";
import PopularCommunities from "../PopularCommunities/PopularCommunities";
import "./Home.css";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [images, setImages] = useState([]);
  const [visiblePosts, setVisiblePosts] = useState(10);
  const [loading, setLoading] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const data = await response.json();
      setPosts(data);
      setLoading(false);
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

  const handleScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;

    if (scrollTop + clientHeight >= scrollHeight) {
      setLoading(true);
      setTimeout(() => {
        setVisiblePosts((prev) => prev + 10);
        setLoading(false);
      }, 1000);
    }
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    console.log(isSidebarOpen);
  };

  return (
    <div className="main-container" onScroll={handleScroll}>
      <div className="nav-container">
        <Navbar toggleSidebar={toggleSidebar} isSidebarOpen={isSidebarOpen} />
      </div>
      <div className="body-container">
        <div className="d-flex">
          <div className="">
            <SideNav isOpen={isSidebarOpen} />
          </div>

          <div className="content-container">
            <div className="list-holder rounded">
              <PostList
                loading={loading}
                posts={posts.slice(0, visiblePosts)}
                images={images}
              />
            </div>
            <div className="popular-communities">
              <PopularCommunities />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
