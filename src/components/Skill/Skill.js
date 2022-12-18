import React from "react";
import "./Skill.css";

const Skill = () => {
  return (
    <div id="skill-section" className="skill-section">
      <p>MY SKILLS PROGRESS SO FAR</p>
      <h1>MY SKILLS</h1>
      <div class="skills-container">
        <div className="font-end-part">
          <h4>font end</h4>
          <div className="hr-rull">

          </div>
          <ul>
            <li class="html">HTML</li>
            <li class="css">CSS</li>
            <li class="bootstrap">Bootstrap</li>
            <li class="js">JavaSCript</li>
          </ul>
        </div>
        <div className="back-end-part">
          <h4>back end</h4>
          <div className="hr-rull">
            
            </div>
          <ul>
            <li class="node">Node.js</li>
            <li class="express">Express.js</li>
            <li class="git">GitHub</li>
            <li class="react">React.js</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skill;
