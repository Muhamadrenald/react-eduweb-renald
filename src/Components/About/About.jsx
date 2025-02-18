import React from "react";
import "./About.css";
import about_img from "../../assets/about.png";
import play_icon from "../../assets/play-icon.png";

export const About = () => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={about_img} alt="logo about" className="about-img" />
        <img src={play_icon} alt="logo play" className="play-icon" />
      </div>
      <div className="about-right">
        <h3>ABOUT UNIVERSITY</h3>
        <h2>Nurturing Tommorow's Leaders Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis vitae
          quam unde quibusdam consequuntur vel dignissimos non id dolorum eaque.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Reprehenderit quam totam similique incidunt eos! Ut magni repellat
          itaque quidem excepturi?
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet ipsam
          temporibus quidem soluta sunt delectus porro aperiam, iste ratione
          dolor nobis rem ipsum reprehenderit eos. Sed distinctio illo ratione
          explicabo.
        </p>
      </div>
    </div>
  );
};
