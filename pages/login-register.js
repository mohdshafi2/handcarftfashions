import React from 'react'
import Layout from "../src/component/Layout/Layout";
import LoginTab from "../src/component/LoginRegister";



const LoginRegister = (props) => {
  return (
      <Layout titleTag="Login | Register">
        <LoginTab />
      </Layout>
  )
}

export default LoginRegister



