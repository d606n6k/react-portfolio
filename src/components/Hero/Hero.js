import React from "react";
import heroImage from "./codehero2.jpg";
import williamHero from "./william.jpg";
function Hero() {
  return (
    <div id="hero">
      <img src={heroImage} alt="web developer cartoon" />
      <div id="william-hero">
        <img src={williamHero} alt="William Lucht" />
      </div>
    </div>
  );
}

export default Hero;
