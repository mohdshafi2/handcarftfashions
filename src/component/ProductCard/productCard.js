import React, { Component } from 'react'
import './productCard.scss'
import Card from 'react-bootstrap/Card'
import Button from "react-bootstrap/Button"
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ProgressBar from 'react-bootstrap/ProgressBar'
import InputGroup from 'react-bootstrap/InputGroup'
import FormControl from 'react-bootstrap/FormControl'
import Link from "next/link";
import {withRouter} from "next/router";

const ProductCard = (props) => {
  return (
      <Card>
        <Link href="/product/[id]" as={`/product/${props.id}`}>
          <a>
            <figure>
              <Card.Img variant="top" src={props.img} />
            </figure>
          </a>
        </Link>
        <Card.Body>
          <div className="price-tag">{props.price} <del>{props.offer}</del></div>
          <Link href="/product/[id]" as={`/product/${props.id}`}>
            <a>
              <Card.Title>{props.title}</Card.Title>
            </a>
          </Link>
          <ProgressBar now={props.progress} />
          <div className="status">
            <strong>{props.claimed}</strong>
            <small>{props.endTime}</small>
          </div>
          <p>Delivery Expert  <span>{props.delivery}</span></p>
          <div className="tail">
            <Row>
              <Col>
                <InputGroup size="xs" className="qty">
                  <InputGroup.Prepend>
                    <InputGroup.Text id="inputGroup-sizing-sm">Qty</InputGroup.Text>
                  </InputGroup.Prepend>
                  <FormControl aria-label="Qty" aria-describedby="inputGroup-sizing-xs"  placeholder="1" />
                </InputGroup>
              </Col>
              <Col>
                <Button variant="primary">Buy</Button>
              </Col>
            </Row>
          </div>
        </Card.Body>
      </Card>
  )
}


export default withRouter(ProductCard)


