import React from 'react'
import './filter.scss'
import Link from "next/link";
import Form from 'react-bootstrap/Form'
import Button from "react-bootstrap/Button";

const Filter = () => {
  return (
      <div className="filter">
        <div className="filterPan">
          <h3>Search</h3>
          <Form.Control
              name="Search"
              type="text"
              placeholder="Search...."
          />
        </div>
        <div className="filterPan">
          <h3>PRODUCT CATEGORIES</h3>
          <ul>
            <li><Form.Check type="checkbox" label="Accessories" /></li>
            <li><Form.Check type="checkbox" label="Book" /></li>
            <li><Form.Check type="checkbox" label="Home life" /></li>
            <li><Form.Check type="checkbox" label="Cloting" /></li>
          </ul>
        </div>
        <div className="filterPan">
          <h3>PRICE</h3>
          <ul>
            <li><a href="">$10,000 - $15,000</a></li>
            <li><a href="">$20,000 - $25,000</a></li>
            <li><a href="">$30,000 - $35,000</a></li>
          </ul>
          <div className="d-flex">
          <Form.Control
              name="Search"
              type="text"
              placeholder="$ Min"
              className="w-50"
          />
          <Form.Control
              name="Search"
              type="text"
              placeholder="$ Max"
              className="w-50"

          />
          </div>
          <Button variant="primary" className="w-100 my-2">G0</Button>
        </div>
      </div>
  )
}

export default Filter

