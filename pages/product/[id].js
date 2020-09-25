import React, { Component } from "react";
import fetch from 'isomorphic-unfetch'
import absoluteUrl from 'next-absolute-url'
import { withRouter } from 'next/router'
import ProgressBar from "react-bootstrap/ProgressBar";
import Card from "react-bootstrap/Card";
import '../../src/component/ProductCard/productCard.scss'
import Layout from "../../src/component/Layout/Layout";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import Tab from 'react-bootstrap/Tab'
import Tabs from 'react-bootstrap/Tabs'

const ProductList = (props) => {
    return (
        <Layout titleTag="Product View">
          <div className="intro">
            <h1>Product View</h1>
            <Link href="/"><a>Back</a></Link>
          </div>
          <main>
            <div className="productPan productView">
              <Container>
                <Row>
                  <Col xs={12} md={6}>
                    <img src={props.data[0].img} alt=""/>
                  </Col>
                  <Col xs={12} md={6}>
                    <Card>
                      <Card.Body>
                        <Card.Title>{props.data[0].title}</Card.Title>


                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temf incididunt ut
                          labore et dolore magna aliqua. Ut enim ad minim veniam, nostr exercitation ullamco laboris
                          nisi ut aliquip ex ea.</p>
                        <div className="price-tag">{props.data[0].price} <del>{props.data[0].offer}</del>
                        </div>
                        <ProgressBar now={props.data[0].progress}/>
                        <div className="status">
                          <strong>{props.data[0].claimed}</strong>
                          <small>{props.data[0].endTime}</small>
                        </div>
                        <p>Delivery Expert <span>{props.data[0].delivery}</span></p>
                        <div className="tail">
                          <Row>
                            <Col>
                              <InputGroup size="xs" className="qty">
                                <InputGroup.Prepend>
                                  <InputGroup.Text id="inputGroup-sizing-sm">Qty</InputGroup.Text>
                                </InputGroup.Prepend>
                                <FormControl aria-label="Qty" aria-describedby="inputGroup-sizing-xs" placeholder="1"/>
                              </InputGroup>
                            </Col>
                            <Col>
                              <Button variant="primary">Buy</Button>
                            </Col>
                          </Row>
                        </div>
                      </Card.Body>
                    </Card>
                    <Tabs defaultActiveKey="Datasheet" id="uncontrolled-tab-example">
                      <Tab eventKey="Description" title="Description">
                        <div>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod temf incididunt ut
                            labore et dolore magna aliqua. Ut enim ad minim veniam, nostr exercitation ullamco laboris
                            nisi ut aliquip ex ea.</p>
                        </div>
                      </Tab>
                      <Tab eventKey="Datasheet" title="Datasheet">
                        2
                      </Tab>
                    </Tabs>
                  </Col>
                </Row>
              </Container>
            </div>
          </main>
        </Layout>
    )
}

ProductList.getInitialProps = async (context) => {
  const { id } = context.query;
  const { req } = context
  const { protocol, host } = absoluteUrl(req)
  const apiURL = `${protocol}//${host}`
  const res = await fetch ('https://raw.githubusercontent.com/mohdshafi2/JSON/master/products');
  const products = await res.json();

  return { data : products.filter(product => {
      if (product.id == id) {
        console.log(product.name)
        return product; }
    })
  }
}



export default withRouter(ProductList)



