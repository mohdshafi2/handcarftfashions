import React from 'react'
import './cardTwo.scss'
import { Col, Container, Row, Button } from "react-bootstrap";
import Card from 'react-bootstrap/Card'
import Link from "next/link";

const CardTwo = ({ CardTwopan }) => {
    return (
        <div className="cardTwo">
            {
                CardTwopan.map((x, i) => {
                    return (
                        <div key={i}>
                            <Container>
                                <h2 className="thems">{x.title}</h2>
                                <ul className="grid__list">
                                    {
                                        x.products.map((y, j) => {
                                            return (
                                                <li key={j}>
                                                    <Card className="text-white">
                                                        <Card.Img src={y.img} alt={y.alt} />
                                                        <Card.ImgOverlay>
                                                            <Card.Title>{y.pname}</Card.Title>
                                                        </Card.ImgOverlay>
                                                    </Card>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                                <Button href="/kids" variant="primary">View More</Button>
                            </Container>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default CardTwo

