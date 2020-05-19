import React from "react";
import Header from "../Header";
import HeroSection from './HeroSection';
import SecondFold from './SecondFold';
import ThirdFold from './ThirdFold';
import {Element} from 'react-scroll';
const HomePage = () => {
  return (
    <>
      <HeroSection />
      <Element name="reglog">
      <SecondFold />
      </Element>
      <ThirdFold />
    </>
  );
};

export default HomePage;
