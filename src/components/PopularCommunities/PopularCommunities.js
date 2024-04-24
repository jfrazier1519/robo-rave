import React from "react";
import "./PopularCommunities.css";
const PopularCommunities = () => {
  const communities = [
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/PlayStation_App_Icon.jpg/640px-PlayStation_App_Icon.jpg",
      name: "PS4",
      members: "5,580,896",
    },
    {
      icon: "https://media.idownloadblog.com/wp-content/uploads/2018/07/Apple-logo-black-and-white.png",
      name: "apple",
      members: "4,920,275",
    },
    {
      icon: "https://cdn.britannica.com/70/234870-050-D4D024BB/Orange-colored-cat-yawns-displaying-teeth.jpg",
      name: "cat",
      members: "11,920,275",
    },
  ];

  return (
    <div className="container shadow-sm p-4 bg-container rounded text-color">
      <h2 className="mb-4">Popular Communities</h2>
      <ul className="list-unstyled">
        {communities.map((community, index) => (
          <li
            key={index}
            className="d-flex align-items-center p-1 rounded list-item"
          >
            <img
              src={community.icon}
              alt={`${community.name} icon`}
              className="community-avatar me-3"
            />
            <div>
              <h5 className="mb-1">{community.name}</h5>
              <p className="">{community.members} members</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PopularCommunities;
