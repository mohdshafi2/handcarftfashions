import React, { Component } from "react";
import Slider from "react-slick";
import absoluteUrl from "next-absolute-url";
import fetch from "isomorphic-unfetch";

export default class ProductImages extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nav1: null,
      nav2: null
    };
  }

  componentDidMount() {
    this.setState({
      nav1: this.slider1,
      nav2: this.slider2
    });
  }

  render(props) {
    return (
        <div>
          <h4>First Slider</h4>
          <Slider
              asNavFor={this.state.nav2}
              ref={slider => (this.slider1 = slider)}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
          <h4>Second Slider</h4>
          <Slider
              asNavFor={this.state.nav1}
              ref={slider => (this.slider2 = slider)}
              slidesToShow={3}
              swipeToSlide={true}
              focusOnSelect={true}
          >
            <div>
              <h3>1</h3>
            </div>
            <div>
              <h3>2</h3>
            </div>
            <div>
              <h3>3</h3>
            </div>
            <div>
              <h3>4</h3>
            </div>
            <div>
              <h3>5</h3>
            </div>
            <div>
              <h3>6</h3>
            </div>
          </Slider>
        </div>
    );
  }
}

ProductImages.getInitialProps = async (context) => {
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