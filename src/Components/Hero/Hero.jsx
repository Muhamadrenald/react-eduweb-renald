import React from "react";
import "./Hero.css";
import dark_arrow from "../../assets/dark-arrow.png";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>We Ensure better education for a better world</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iste
          corrupti ullam quas mollitia maxime provident iure laudantium
          voluptatum facere nam!
        </p>
        <div className="btn">
          Explore more <img src={dark_arrow} alt="logo arrow" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
