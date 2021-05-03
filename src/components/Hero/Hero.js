import React from "react";
import heroImage from "../../images/dancing.png";
function Hero() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="row hero-row">
          <div className="col">
            <div className="heading-wrapper">
              <div className="main-heading">
                <h2>Uncover your favorite Artiste</h2>
              </div>
              <div className="sub-heading">
                <h3>
                  Find out everthing you need to know about your favorite,
                  artiste or band
                </h3>
              </div>
              <button className="btn-cta">Click me</button>
            </div>
          </div>
          <div className="col">
            <div className="image-wrapper">
              <img src={heroImage} alt="dancing" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
