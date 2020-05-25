import React from "react";
import Header from "../../Header";
import Head from "next/head";

const Layout = ({ children }) => {
  return (
    <div>
      <Head>
        <title>Xelarate</title>
      </Head>
      <Header
        style={{ position: "-webkit-sticky", position: "sticky", top: "0" }}
      />
      {children}
    </div>
  );
};

export default Layout;
