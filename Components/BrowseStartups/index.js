import React from "react";
import styles from "./browse-startups.module.scss";
import HeroSection from "./HeroSection";
import SecondFold from "./SecondFold";

const BrowseStartups = ({ data }) => {
  return (
    <>
      <HeroSection />
      <SecondFold body={data} />
    </>
  );
};

export default BrowseStartups;
