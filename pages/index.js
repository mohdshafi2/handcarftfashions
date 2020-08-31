import React from 'react'
import Layout from "../src/component/Layout/Layout";
import CardOne from '../src/component/CardOne/cardOne';
import CardTwo from '../src/component/CardTwo/cardTwo';
import ProductSlider from '../src/component/ProductSlider/productSlider';

const Home = (props) => {
  return (
    <Layout titleTag="Home Page">
      <div className="intro">
        <div className="container">
          <div className="intro_txt">
            <h1>Welcome Farmer Product</h1>
            <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
          </div>
        </div>
      </div>
      <main>
        <CardOne></CardOne>
        <ProductSlider/>
        <CardTwo></CardTwo>
      </main>
    </Layout>
  )
}

export default Home



