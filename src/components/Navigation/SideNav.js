import React from "react";

const SideNav = () => {
  return (
    <div
      className="d-flex fixed flex-column flex-shrink-0 p-3 text-white bg outline"
      style={{ width: "280px" }}
    >
      <ul className="nav nav-pills flex-column mb-auto">
        <li className="nav-item">
          <a href="/" className="nav-link" aria-current="page">
            <svg className="bi me-2" width="16" height="16">
              <use href="#home" />
            </svg>
            Home
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#speedometer2" />
            </svg>
            Popular
          </a>
        </li>
        <hr />
        <h6 className="">TOPICS</h6>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#table" />
            </svg>
            Gaming
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#grid" />
            </svg>
            Sports
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Business
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Television
          </a>
        </li>
        <hr />
        <h6 className="">RESOURCES</h6>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            About Robo Rave
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Advertize
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Help
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Blog
          </a>
        </li>
        <hr />
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Communities
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Best of Robo Rave
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Topics
          </a>
        </li>{" "}
        <hr />
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Content Policy
          </a>
        </li>{" "}
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            Privacy Policy
          </a>
        </li>
        <li className="nav-item">
          <a href="/" className="nav-link text-white">
            <svg className="bi me-2" width="16" height="16">
              <use href="#people-circle" />
            </svg>
            User Agreement
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
