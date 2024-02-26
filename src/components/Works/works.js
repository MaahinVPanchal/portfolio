import React from "react";
import "./work.css";

import Portfolio7 from "../../assets/portfolio-7.png";
import Portfolio8 from "../../assets/portfolio-8.png";
import Portfolio9 from "../../assets/portfolio-9.png";
import Portfolio10 from "../../assets/portfolio-10.png";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Blockchain As Begineer.</h2>
      <span className="worksDesc">
        I am eagerly awaiting to learn and pursue a career in blockchain
        technology.I am starting with this part.
      </span>
      <div className="worksImgs">
        <img src={Portfolio7} alt="Portfolio7" className="worksImg" />
        <img src={Portfolio8} alt="Portfolio8" className="worksImg" />
        <img src={Portfolio9} alt="Portfolio9" className="worksImg" />
        <img src={Portfolio10} alt="Portfolio10" className="worksImg" />
      </div>
      <button className="worksBtn">See more</button>
    </section>
  );
};

export default Works;
