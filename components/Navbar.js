import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../assests/dumble.png";
const Navbar = () => {
  return (
    <div className="container">
      <div className="nav__wrapper">
        <div className="logo">
          <div className="logo__img">
            <img src={logo} alt=""></img>
          </div>
          <h2>FitTracker</h2>
        </div>

        <div className="navigation">
          <ul className="menu">
            <li className="nav_item">
              <Link to="/">Home</Link>
            </li>
            <li className="nav_item">
              <Link to="/about">About</Link>
            </li>
            <li className="nav_item">
              <Link to="/project">Project</Link>
            </li>
            <li className="nav_item">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ul>
        </div>

        <div className="nav_right">
          <button className="signin">SIGN-IN</button>
          <button className="signin">Login</button>
          <span className="mobile_menu"><i class="ri-menu-line"></i></span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
