import React from "react";
import Header2 from "../Header2";
import Head from "next/head";

const Layout2 = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Xelarate</title>
      </Head>
      <Header2
        style={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
      />
      {children}
    </div>
  );
};

export default Layout2;
