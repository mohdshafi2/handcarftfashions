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
                <img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="" />
            </div>
            <div className="topList">
                <img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="" />
            </div>
            <div className="topList">
                <img src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0070100_quintessential-mauve-designer-dress.jpeg" alt="" />
            </div>
            <div className="topList">
                <img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="" />
            </div>
            <div className="topList">
                <img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="" />
            </div>
            <div className="topList">
                <img src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0070100_quintessential-mauve-designer-dress.jpeg" alt="" />
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
                    <img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0070100_quintessential-mauve-designer-dress.jpeg" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="" />
                </div>
                <div className="bottomList">
                    <img src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0070100_quintessential-mauve-designer-dress.jpeg" alt="" />
                </div>
                </Slider>
            </div>
            </div>
          </Container>
      </div>
    );
  }
}