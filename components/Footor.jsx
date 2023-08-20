import React from "react";
import "./Footor.css";
import logo from '../assests/dumble.png'
const Footor = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footor_wrapper">
          <div className="footor_box">
            <div className="logo">
              <div className="logo__img">
                <img src={logo} alt=""  />
              </div>
              <h2>FitTrack</h2>
            </div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim nam iure impedit voluptatem sapiente, officiis eveniet accusamus alias laboriosam eius.
            </p>
          </div>
          <div className="footor_box">
            <h2 className="footor_title">Company</h2>
            <ul className="footor_links">
              <li>Our Program</li>
              <li>Our Plan</li>
              <li>Become a Member</li>
            </ul>
          </div>

          <div className="footor_box">
            <h2 className="footor_title">Quick Links</h2>
            <ul className="footor_links">
              <li>About Us</li>
              <li>Contact us</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footor;
