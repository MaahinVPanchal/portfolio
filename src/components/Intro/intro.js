import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import btnImg from "../../assets/hireme.png";
import { Link } from "react-scroll";

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent">
        <span className="hello">Hello,</span>
        <span className="introtext">
          I'm <span className="introName">Maahin</span>
          <br />
          Blockchain Developer
        </span>
        <p className="introPara">
          Every smart person that I admire in the world, and those I semi-fear,
          is
          <br /> focused on this concept of crypto for a reason.
        </p>
        <Link>
          <button className="btn">
            <img src={btnImg} alt="Hire Me" className="btnImg" />
            Hire Me
          </button>
        </Link>
      </div>
      <img src={bg} alt="Profile" className="bg" />
    </section>
  );
};

export default Intro;
