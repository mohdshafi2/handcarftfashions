import React, { Component } from "react";
import Slider from "react-slick";
import './productSlider.scss'
import { Container } from "react-bootstrap";

export default class ProductSlider extends Component {
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

  render() {
    return (
      <div className="productSlider">
          <Container>
            <h2>Designer Gallery</h2>
            <div className="productSlider__main">
            <div className="productSlider__top">
                <Slider
                fade={true}
            asNavFor={this.state.nav2}
            ref={slider => (this.slider1 = slider)}
            >
            <div className="topList">
                <img src="https://picsum.photos/id/1023/1000/600" alt="" />
            </div>
            <div className="topList">
                <img src="https://picsum.photos/id/1024/1000/600" alt="" />
            </div>
            <div className="topList">
                <img src="https://picsum.photos/id/1025/1000/600" alt="" />
            </div>
            <div className="topList">
                <img src="https://picsum.photos/id/1026/1000/600" alt="" />
            </div>
            <div className="topList">
                <img src="https://picsum.photos/id/1027/1000/600" alt="" />
            </div>
            <div className="topList">
                <img src="https://picsum.photos/id/1028/1000/600" alt="" />
            </div>
            </Slider>
            </div>
            <div className="productSlider__bottom">
                <Slider
                asNavFor={this.state.nav1}
                ref={slider => (this.slider2 = slider)}
                slidesToShow={4}
                slidesToScroll={4}
                swipeToSlide={true}
                focusOnSelect={true}
                dots= {true}
                arrows={false}
                >
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1023/1000/600" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1024/1000/600" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1025/1000/600" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1026/1000/600" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1027/1000/600" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://picsum.photos/id/1028/1000/600" alt="" />
                </div>
                </Slider>
            </div>
            </div>
          </Container>
      </div>
    );
  }
}