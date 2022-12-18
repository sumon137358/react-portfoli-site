import React from "react";
import img from "../resoures/emages/sumon2.png";
import "./Home.css";
const Home = () => {
  return (
    <section class="information-section" id="bg-style">
      <div class="half-area">
        <h1>
          Hey! I Am <br /> <samp> Shumon Mia</samp>
        </h1>

        <p>
          Am a Kenyan based Software Developer <br /> passionate and experienced in
          building Web applications.
        </p>
        <button>hire me</button>
        <p>Follow Me:</p>
        <p>
          <li>
            {" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-facebook footer-icon"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-youtube footer-icon"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-github footer-icon"></i>
            </a>
          </li>
          <li>
            {" "}
            <a href="http://#" target="_blank" rel="noopener noreferrer">
              <i class="fab fa-linkedin footer-icon"></i>
            </a>
          </li>
        </p>
      </div>
      <div class="half-area">
        <img src={img} alt="sumon" />
      </div>
    </section>
  );
};

export default Home;
