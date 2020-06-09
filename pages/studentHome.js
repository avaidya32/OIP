import React from "react";
//import Summary from "../Components/StudentHome/Summary";
import SecondFold from "../Components/StartupHome/SecondFold";
import Layout from "../Components/Common/Layout";

const StudentHomePage = ({ body }) => {
  return (
    <Layout>
      {/* <Summary data={body} /> */}
      <SecondFold body={body} />
    </Layout>
  );
};

StudentHomePage.getInitialProps = async ({ query, res, req }) => {
  if(typeof req !== 'undefined') {
    if (!req.user) {
      res.redirect("/login");
    } else if (req.user.Role != "Student" && req.user.Role === "Client") {
      res.redirect("/clientHome");
    } else if (req.user.Role == "Startup") {
      res.redirect("/startupHome");
    }
  }
  
  res = await fetch("http://localhost:3000/api/hackathon/getinfo");
  const json = await res.json();
  return { body: json };
};

export default StudentHomePage;
