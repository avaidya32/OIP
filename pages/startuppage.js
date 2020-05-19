import React from "react";
import StartupPage from "../Components/StartupPage";
//import {useLocation} from "react-router-dom";

import Layout from "../Components/Common/Layout";

const StartupView = ({ data }) => {
  return (
    <Layout>
      <StartupPage dataObject={data} />
    </Layout>
  );
};

StartupView.getInitialProps = async ({ query, res, req }) => {
  const { id } = query;
  const data = await fetch("http://localhost:3000/api/startup/getinfo", {
    method: "POST",
    body: JSON.stringify({
      id: id,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((payload) => {
      return payload;
    });
  return { data };
};

export default StartupView;
