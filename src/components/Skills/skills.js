import React from "react";
import "./skills.css";
import Python from "../../assets/python.png";
import WebDesign from "../../assets/htmlcssjs.png";
import Reactjs from "../../assets/reactjs.png";

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">
        We believe that cryptocurrency and the use of blockchain can open up the
        economy to individuals and groups that have been historically excluded
        or ignored by the free market and financial institutions.
      </span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Python} alt="Python" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Python</h2>
            <p>I had learn python and make some project.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={WebDesign} alt="WebDesign" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Website Design</h2>
            <p>I had made simple webpage through html,css,js.</p>
          </div>
        </div>
      </div>
      <div className="skillBars">
        <div className="skillBar">
          <img src={Reactjs} alt="Reactjs" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Reactjs</h2>
            <p>I had prior knowledge based on reactjs.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
