import React from "react";
import BrowseStartups from "../Components/BrowseStartups";
import Layout from "../Components/Common/Layout";

const Browse = ({ body }) => {
  return (
    <Layout>
      <BrowseStartups data={body} />
    </Layout>
  );
};

Browse.getInitialProps = async (ctx) => {
  try {
    const res = await fetch("http://localhost:3000/api/startup/getinfo");
    const json = await res.json();
    return { body: json };
  } catch (error) {
      return res.status(500).json({error: "error while recieving."})
  }
    
};

export default Browse;
