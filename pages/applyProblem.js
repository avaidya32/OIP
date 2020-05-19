import React from "react";
import ApplyProblem from "../Components/ApplyProblem";
import Layout from "../Components/Common/Layout";

const Apply = ({data}) => {
  return (
    <Layout>
      <ApplyProblem dataObject={data} />
    </Layout>
  );
};

Apply.getInitialProps = async ({ query, res, req }) => {
  const { name } = query;
  const data = await fetch("http://localhost:3000/api/hackathon/getinfo", {
    method: "POST",
    body: JSON.stringify({
      name: name,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((result) => {
      return result.json();
    })
    .then((payload) => {
      return  payload ;
    });
  return {data};
};

export default Apply;
