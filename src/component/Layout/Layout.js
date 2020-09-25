import React from 'react'
import Header from "../Header/header";
import Head from "next/head";
import Footer from "../Footer/footer";

const Layout = (props) => {
  return (
      <div>
        <Head>
          <title>{props.titleTag}</title>
          <link rel="icon" href="/favicon.ico"/>
          <link rel="stylesheet" type="text/css" charSet="UTF-8"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"/>
          <link rel="stylesheet" type="text/css"
                href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"/>
        </Head>

        <Header/>
        {props.children}
        <Footer />

      </div>
  )
}

export default Layout