import React from "react";
import SetPhases from "../Components/HackathonForms/SetPhases";
import Layout2 from "../Components/Common/Layout2";
import { ParallaxProvider } from "react-scroll-parallax";

const SetPhase = (data) => {
  return (
    <Layout2>
      <ParallaxProvider>
        <SetPhases data = {data}/>
      </ParallaxProvider>
    </Layout2>
  );
};

SetPhase.getInitialProps = async ({ query, res, req }) => {
  if(typeof req !== 'undefined') {
    if (!req.user) {
      res.redirect("/login");
    } else if (req.user.Role != "Client" && req.user.Role === "Startup") {
      res.redirect("/startupHome");
    }
  }
  
  const { id, phases } = query;
  
  const data = {hack_id: id, phases : phases};
  console.log("getprops setphase", data);
  return data;
};

export default SetPhase;
