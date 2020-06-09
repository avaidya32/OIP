import React from "react";
import ProbPage from "../Components/ProbPage";
//import {useLocation} from "react-router-dom";

import Layout from "../Components/Common/Layout";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}
const Prob = ({ info }) => {
  return (
    <Layout>
      <ProbPage dataObject={info} />
    </Layout>
  );
};

Prob.getInitialProps = async ({ query, res, req }) => {
  // if (!req.user) {
  //   res.redirect("/login");
  // }
  const { id, role } = query;
  if (role != "Client" && role === "Startup") {
    res.redirect("/startupHome");
  }
  console.log("getprops probpage id", id);
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
  const data2 = await fetch("http://localhost:3000/api/solution/getinfo", {
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
  console.log('data2 getprops',data2);
  const info = { data: data, data2: data2 };
  return { info };
};

export default Prob;
