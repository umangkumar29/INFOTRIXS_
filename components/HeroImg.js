import React from "react";
import heroImg from "../assests/gym-05.png";
import dumbleIcon from "../assests/dumble.png"
import "./HeroImg.css"
const HeroImg = () => {
  return (
    <section>
      <div className="container">
        <div className="hero_wrapper">
          <div className="hero_content">
            <h2 className="section_title">
              Exerscise is the key to a
              <span className="highlights"> Healthy </span>life
            </h2>
            <p>
            Regular physical activity is one of the most important things you can do for your health. Being physically active can improve your brain health, help manage weight, reduce the risk of disease, strengthen bones and muscles, and improve your ability 
            to do everyday activities.
            </p>

            <button className="get_started"> Get Started</button>
          </div>

          <div className="hero_img">
            <div className="hero_img-wrapper">
              <div className="box-1">
                <div className="box-2">
                  <div className="box-3">
                  <div className="box_img">
                <img src={heroImg} alt="hero" />
              </div>
                  </div>
                </div>
              </div>
             


            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroImg;
