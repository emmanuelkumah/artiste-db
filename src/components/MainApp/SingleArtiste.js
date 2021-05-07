import React from "react";
import { RiFacebookLine, RiTwitterLine } from "react-icons/ri";
import { CgWebsite } from "react-icons/cg";
// import { Link } from "react-router-dom/cjs/react-router-dom.min";

function SingleArtiste({
  name,
  label,
  year,
  country,
  image,
  image2,
  image3,
  logo,
  style,
  genre,
  bio,
  Facebook,
  Twitter,
  Website,
}) {
  return (
    <section className="artiste-container">
      <article className="artiste-row">
        <div className="artiste-img-wrapper">
          <img src={image3} alt={name} className="artiste-img" width="300px" />
        </div>
        <div className="artiste-info-container">
          <h2 className="artiste-name">{name}</h2>
          <div className="artiste-brief">
            <span>Country:{country}</span>
            <span>label:{label}</span>
            <span>Genre:{genre}</span>
          </div>
          <div className="artiste-biography">
            <h3>Biography</h3>
            <p className="line-clamp">{bio}</p>
          </div>
          <div>
            <h3>Connect with {name}</h3>
            <div className="artiste-socials">
              <a
                href={Website}
                rel="noreferrer"
                target="_blank"
                className="social-icons"
              >
                <CgWebsite />
              </a>
              <a
                href={Facebook}
                rel="noreferrer"
                target="_blank"
                className="social-icons"
              >
                <RiFacebookLine />
              </a>
              <a
                href={Twitter}
                rel="noreferrer"
                target="_blank"
                className="social-icons"
              >
                <RiTwitterLine />
              </a>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}

export default SingleArtiste;
