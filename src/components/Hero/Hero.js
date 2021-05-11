import React from "react";
import heroImage from "../../images/dancing.png";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="row hero-row">
          <div className="col">
            <div className="image-wrapper">
              <img src={heroImage} alt="dancing" className="hero-img" />
            </div>
          </div>
          <div className="col">
            <div className="heading-wrapper">
              <div className="main-heading">
                <h2>Uncover your favorite Artiste</h2>
              </div>
              <div className="sub-heading">
                <h3>
                  Easilty Find out everthing you need to know about your
                  favorite artiste or band.
                </h3>
              </div>
              <Link to="/main-app">
                <button className="btn-cta">Get Started</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
