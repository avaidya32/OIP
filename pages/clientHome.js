import React from "react";
import ClientHome from "../Components/ClientHome";
import Layout from "../Components/Common/Layout";
const ClientHomePage = ({ info }) => {
  return (
    <Layout>
      <ClientHome info={info} />
    </Layout>
  );
};

ClientHomePage.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Client" && req.user.Role === "Startup") {
    res.redirect("/startupHome");
  }
  const id = req.user._id;
  const data = await fetch("http://localhost:3000/api/dashboard/client", {
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
  console.log("data: ", data);
  const info = { data };
  console.log("info:", info);
  return { info };
};

export default ClientHomePage;
