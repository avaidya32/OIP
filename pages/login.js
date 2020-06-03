import React from 'react';
import LoginPage from '../Components/LoginPage';
import Layout from '../Components/Common/Layout';
import { ParallaxProvider } from "react-scroll-parallax";


const Login = () => {
    return (

    <Layout>
      <ParallaxProvider>
      <LoginPage/>
      </ParallaxProvider>
    </Layout>
    )
}

export default Login;