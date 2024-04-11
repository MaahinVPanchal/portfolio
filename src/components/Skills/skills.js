import React from "react";
import "./skills.css";

const Skills = () => {
  const handleButtonClick = (category) => {
    // Implement logic to handle button click
    console.log(`Clicked on ${category}`);
  };

  return (
    <section id="skills">
      <span className="skillTitle">Our Products</span>
      <span className="skillDesc">
        Explore our range of products designed to meet your needs and enhance
        your experience in the digital world.
      </span>
      <div className="skillButtons">
        <button onClick={() => handleButtonClick("Laptops")}>Grocery</button>
        <button onClick={() => handleButtonClick("Mobiles")}>Mobiles</button>
        <button onClick={() => handleButtonClick("Clothes")}>Fashion</button>
        <button onClick={() => handleButtonClick("Clothes")}>Laptops</button>
        <button onClick={() => handleButtonClick("Clothes")}>Electronics</button>
        <button onClick={() => handleButtonClick("Clothes")}>Fashion</button>
      </div>
    </section>
  );
};

export default Skills;
