import React from "react";
import ClientHome from "../Components/ClientHome";
import Layout from "../Components/Common/Layout";
const ClientHomePage = ({ client_id }) => {
  return (
    <Layout>
      <ClientHome client_id={client_id} />
    </Layout>
  );
};

ClientHomePage.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Client" && req.user.Role ==="Startup") {
    res.redirect("/startupHome");
  }
  const { id } = query;
  console.log("getprops:", query);
  return { client_id: query.id };
};

export default ClientHomePage;
