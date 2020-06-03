import React from "react";
import ApplyProblem from "../Components/ApplyProblem";
import AdditionalInfo from "../Components/AdditionalInfo";
import Layout from "../Components/Common/Layout";

const Additional = ({ user }) => {
  return (
    <Layout>
      <AdditionalInfo user={user} />
    </Layout>
  );
};

Additional.getInitialProps = async ({ query, res, req }) => {
  console.log("getprops:", req.user);
  return { user: req.user };
};
export default Additional;
