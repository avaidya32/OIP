import React from "react";
import HomePage from "../Components/HomePage";
import Head from "next/head";
import Layout2 from '../Components/Common/Layout2';

const MainPage = () => {
  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
      </Head>
      <Layout2>
        <HomePage />
      </Layout2>
    </>
  );
};

export default MainPage;
