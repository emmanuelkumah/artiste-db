import React from "react";
import { RiFacebookLine, RiProfileLine, RiTwitterLine } from "react-icons/ri";
import { AiFillFormatPainter } from "react-icons/ai";
import {
  GiShadowFollower,
  GiModernCity,
  GiMusicSpell,
  GiMusicalNotes,
  GiNewBorn,
} from "react-icons/gi";
import { CgWebsite } from "react-icons/cg";

function SingleArtiste({
  name,
  label,
  born,
  formed,
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
          <img src={image3} alt={name} className="artiste-img" />
        </div>
        <div className="artiste-info-container">
          <h2 className="artiste-name">{name}</h2>

          <div className="artiste-details">
            <p>
              <GiModernCity className="a-b-icon" />
              Country: {country}
            </p>
            <p>
              <GiMusicSpell className="a-b-icon" />
              Label: {label}
            </p>
            <p>
              <GiMusicalNotes className="a-b-icon" />
              Genre: {genre}
            </p>
            {/* <span>Country:{country}</span>
            <span>label:{label}</span>
            <span>Genre:{genre}</span> */}
          </div>
          <div className="artiste-biography">
            <h3>
              <span className="artiste-icon">
                <RiProfileLine />
              </span>
              Biography
            </h3>

            <p className="line-clamp">{bio}</p>
          </div>
          <div>
            <h3>
              <span className="artiste-icon">
                <GiShadowFollower />
              </span>
              Connect
            </h3>
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
