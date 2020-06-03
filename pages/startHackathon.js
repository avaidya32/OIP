import React from "react";
import StartHackathon from "../Components/StartHackathon";
import Layout from "../Components/Common/Layout";

const StartHack = ({ info }) => {
  return (
    <Layout>
      <StartHackathon info={info} />
    </Layout>
  );
};

StartHack.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Client" && req.user.Role === "Startup") {
    res.redirect("/startupHome");
  }
  const type = query.type;
  // const isPublic = query.isPublic;
  const info = { client_id: req.user.id, type: type};
  return {info};
};

export default StartHack;
