import React from "react";
import PostSolution from "../Components/PostSolution";
import Layout from "../Components/Common/Layout";
const Post = ({ data }) => {
  return (
    <Layout>
      <PostSolution data={data} />
    </Layout>
  );
};

Post.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Startup" && req.user.Role === "Client") {
    res.redirect("/clientHome");
  }
  const data = { hack_id: query.hack_id, startup_id: req.user._id, startup_name: req.user.OrgName };
  console.log(data);
  return { data };
};

export default Post;
