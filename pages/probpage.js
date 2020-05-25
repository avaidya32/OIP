import React from "react";
import ProbPage from "../Components/ProbPage";
//import {useLocation} from "react-router-dom";

import Layout from "../Components/Common/Layout";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Prob = ({ data }) => {
  return (
    <Layout>
      <ProbPage dataObject={data} />
    </Layout>
  );
};

Prob.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Client" && req.user.Role === "Startup") {
    res.redirect("/startupHome");
  }
  const { id } = query;
  const data = await fetch("http://localhost:3000/api/hackathon/getinfo", {
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

export default Prob;
