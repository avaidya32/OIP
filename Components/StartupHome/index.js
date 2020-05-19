import React from "react";
import styles from "./startup-home.module.scss";
import Summary from "./Summary";
import SecondFold from "./SecondFold";

const StartupHome = ({ data }) => {
  return (
    <>
      {/*<Summary />/*/}
      <SecondFold body={data} />
    </>
  );
};

export default StartupHome;
