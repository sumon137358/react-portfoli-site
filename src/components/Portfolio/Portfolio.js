import React from "react";
import "./Portfolio.css";
import img4 from "../resoures/emages/Screenshot_1.png";
import img5 from "../resoures/emages/images (1).jfif";
import img6 from "../resoures/emages/images (4).jfif";
import img7 from "../resoures/emages/images (3).jfif";
import img8 from "../resoures/emages/download (2).jfif";
import img9 from "../resoures/emages/download (3).jfif";
import img10 from "../resoures/emages/Screenshot_3.png";
import img11 from "../resoures/emages/images (2).jfif";

const Portfolio = () => {
  return (
    <section id="archives" class="section-center">
      <h5>check out my projects</h5>
      <h2 class="section-heading">PORTFOLIO</h2>
      <div className="hr-rull"></div>
      <div class="archives-container">
        <div className="archives-row">
          <div className="col-3 card-style">
            <img src={img4} alt="image1" class="archives-img" />
            <p>this is my first demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img5} alt="image1" class="archives-img" />
            <p>this is my second demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img6} alt="image1" class="archives-img" />
            <p>this is my third demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img7} alt="image1" class="archives-img" />
            <p>this is my forth demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
        </div>
        <div className="archives-row">
          <div className="col-3 card-style">
            <img src={img8} alt="image1" class="archives-img" />
            <p>this is my fifth demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img9} alt="image1" class="archives-img" />
            <p>this is my sixth demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img10} alt="image1" class="archives-img" />
            <p>this is my seventh demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
          <div className="col-3 card-style">
            <img src={img11} alt="image1" class="archives-img" />
            <p>this is my eighth demo</p>
            <button>Demo</button>
            <button>Github</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
