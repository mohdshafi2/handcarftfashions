import React from 'react'
import Layout from "../src/component/Layout/Layout";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProductCard from "../src/component/ProductCard/productCard";
import Link from "next/link";
import absoluteUrl from "next-absolute-url";
import fetch from "isomorphic-unfetch";


const Home = (props) => {
  return (
    <Layout titleTag="Home Page">
      <div className="intro">
        <h1>Farmer Product</h1>
        <Link href="/"><a>Home</a></Link>
      </div>
      <main className='Product'>
        <Container>
          <Row>
              <Col xs={12} md={12}>
                <div className="productPan">
                  <Row>
                    {props.products.map((product, index) => (
                    <Col xs={12} sm={6} md={4} lg={3}>
                      <ProductCard key={`product-${index}`}
                                   img={product.img}
                                   title={product.title}
                                   id={product.id}
                                   price={product.price}
                                   offer={product.offer}
                                   progress={product.progress}
                                   claimed={product.claimed}
                                   endTime={product.endTime}
                                   delivery={product.delivery}
                      />
                    </Col>
                    ))}
                  </Row>
                </div>
              </Col>
          </Row>
        </Container>
      </main>
    </Layout>
  )
}

Home.getInitialProps = async ({req}) => {
  const { protocol, host } = absoluteUrl(req)
  const apiURL = `${protocol}//${host}`
  const res = await fetch ('https://raw.githubusercontent.com/mohdshafi2/JSON/master/products');
  const data = await res.json();

  return {
    products: data
  }
}

export default Home



