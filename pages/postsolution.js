import React from "react";
import PostSolution from "../Components/PostSolution";
import Layout from "../Components/Common/Layout";
const Post = () => {
  return (
    <Layout>
      <PostSolution />
    </Layout>
  );
};

Post.getInitialProps = async ({ query, res, req }) => {
  if (!req.user) {
    res.redirect("/login");
  } else if (req.user.Role != "Startup" && req.user.Role === "Client") {
    res.redirect("/clientHome");
  }
};

export default Post;
