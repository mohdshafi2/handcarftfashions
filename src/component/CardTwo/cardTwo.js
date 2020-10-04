import React from 'react'
import './cardTwo.scss'
import {Col, Container, Row, Button} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Link from "next/link";

const CardTwo = () => {
  return (
      <div className="cardTwo">
          <Container>
              <h2 className="thems">Kids Fashions</h2>
              <ul className="grid__list">
                <li>
                    <Card className="text-white">
                        <Card.Img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Half Sarees</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </li>
                <li>
                    <Card className="text-white">
                        <Card.Img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Half Sarees</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </li>
                <li>
                    <Card className="text-white">
                        <Card.Img src="https://www.aishwaryadesignstudio.com/content/images/thumbs/0070100_quintessential-mauve-designer-dress.jpeg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Half Sarees</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </li>
                <li>
                    <Card className="text-white">
                        <Card.Img src="https://i.pinimg.com/736x/00/c4/28/00c4280aec233279f0c1ccdb85559661.jpg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Half Sarees</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </li>
                <li>
                    <Card className="text-white">
                        <Card.Img src="https://4.imimg.com/data4/AO/YR/MY-622474/ladies-designer-suit-500x500.jpeg" alt="Card image" />
                        <Card.ImgOverlay>
                            <Card.Title>Half Sarees</Card.Title>
                        </Card.ImgOverlay>
                    </Card>
                </li>
              </ul>
              <Button href="#" variant="primary">View More</Button>
          </Container>
      </div>
  )
}

export default CardTwo

