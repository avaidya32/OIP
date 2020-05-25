import React from "react";
import ApplyProblem from "../Components/ApplyProblem";
import AdditionalInfo from "../Components/AdditionalInfo";
import Layout from "../Components/Common/Layout";

const Additional = ({ GoogleId }) => {
  return (
    <Layout>
      <AdditionalInfo GoogleId ={GoogleId} />
    </Layout>
  );
};

Additional.getInitialProps = async ({ query, res, req }) => {
  const {GoogleId} = query;
  console.log('getprops:',query);
  return { GoogleId: query.GoogleId};
};
export default Additional;
