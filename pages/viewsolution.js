import React from "react";
import ViewSolution from "../Components/Common/ViewSolution";
import Layout from "../Components/Common/Layout";

const Solution = ({ data }) => {
  return (
    <Layout>
      <ViewSolution data={data} />
    </Layout>
  );
};
Solution.getInitialProps = async ({ query, res, req }) => {
  if (!req.user ) {
    res.redirect("/login");
  }
  else if(req.user.Role != "Client" && req.user.Role==="Client"){
    res.redirect("/startupHome");
  } else if(req.user.Rol==="Student"){
      res.redirect("/studentHome");
  }
  const { id } = query;
  const data = await fetch("http://localhost:3000/api/solution/getinfobyid", {
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
    console.log('getprops data:', data);
    return {data};
};
export default Solution;
