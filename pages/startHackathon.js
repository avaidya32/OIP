import React from "react";
import StartHackathon from "../Components/StartHackathon";
import Layout from "../Components/Common/Layout";

const StartHack = ({ client_id }) => {
  return (
    <Layout>
      <StartHackathon client_id={client_id} />
    </Layout>
  );
};

StartHack.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Client" && req.user.Role === "Startup") {
    res.redirect("/startupHome");
  }
  const { id } = query;
  console.log("getprops:", query);
  return { client_id: query.id };
};

export default StartHack;
