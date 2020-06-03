import React from "react";
import Header from "../Header";
import HeroSection from "./HeroSection";
import SecondFold from "./SecondFold";
import ThirdFold from "./ThirdFold";
import { Element } from "react-scroll";
import { ParallaxProvider } from "react-scroll-parallax";
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Element name="reglog">
        <ParallaxProvider>
          <SecondFold />
          </ParallaxProvider>
      </Element>
      <ThirdFold />
    </>
  );
};

export default HomePage;
