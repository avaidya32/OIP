import React from "react";
import StartupHome from "../Components/StartupHome";
import Layout from "../Components/Common/Layout";

const StartupHomePage = ({body}) => {
  return (
    <Layout>
      <StartupHome data ={body}/>
    </Layout>
  );
};
StartupHomePage.getInitialProps = async ctx => {
  const res = await fetch("http://localhost:3000/api/hackathon/getinfo");
  const json = await res.json();
  return { body: json };
}
export default StartupHomePage;
