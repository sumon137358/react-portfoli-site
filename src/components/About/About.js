import React from "react";
import "./About.css";
import img2 from "../resoures/emages/sumon2.png";
const About = () => {
  return (
    <div className="about-section " id="about">
      <h1>ABOUT</h1>
      <div className="about-left half-area">
        <img src={img2} alt="" />
      </div>
      <div className="about-right half-area">
        <h3>WHY HIRE ME FOR YOUR NEXT PROJECT?</h3>
        <p>
          I'm 22 years old creative <strong>SOFTWARE DEVELOPER</strong>
          based in react js specializing in User Interface Design and
          Development. I build clean, appealing, and functional interfaces which
          comply with the latest web standards.
        </p>

        <p>
          i'm currently a final year uudergrad college student pursuing{" "}
          <strong>B.Sc.Information Technology</strong> course.I'm a react
          developer passionate about open source.
        </p>
        <button>DOWNLOAD CV</button>
      </div>
    </div>
  );
};

export default About;
