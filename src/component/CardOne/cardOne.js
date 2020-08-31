import React from 'react'
import './cardOne.scss'
import {Col, Container, Row} from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Link from "next/link";


const CardOne = () => {
  return (
      <div className="cardOne">
          <Container>
              <h2 className="thems">Trending Fashions</h2>
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
          </Container>
      </div>
  )
}

export default CardOne

