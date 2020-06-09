import React from "react";
import styles from "./post-solution.module.scss";
import HeroSection from "./HeroSection";
//import SecondFold from "./SecondFold"

const PostSolution = ({ data }) => {
  return (
    <div className={styles.container}>
      <HeroSection data={data} />
      {/* <SecondFold body = {dataObject}/> */}
    </div>
  );
};

export default PostSolution;
