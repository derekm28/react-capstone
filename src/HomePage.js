import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from 'react-bootstrap/Carousel'
import { Card } from "react-bootstrap";

function HomePage(props) {

    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100";

    const [sneakers, setSneakers] = useState(null);

    useEffect(() => {
        axios.get(url).then(res => {
            setSneakers(res.data.results)
        });
    }, [url])

    function SneakerDisplay() {
        return (
            <div className="row justify-content-center ">
                {sneakers
                    ? sneakers.map((s, idx) => (
                        <Card
                            key={s.id}
                            className="mr-2"
                            title={s.title}
                            brand={s.brand}
                            colorway={s.colorway}
                            style={{ width: "18rem" }}
                            shoe={s.shoe}
                            name={s.name}>
                            <Card.Body>
                                <Card.Img variant="top" src={s.media.smallImageUrl} />
                                <Card.Title>{s.title}</Card.Title>
                                <Card.Text>
                                    {s.brand}
                                    {s.name}
                                    {s.shoe}
                                    {s.colorway}
                        ${s.retailPrice}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                    : null}
            </div>
        );
    }
    return (
        <div className='HomePage'>
            <h1 className='HomePage-title'>Home</h1>
            <div className='HomePage-cards'>
                <Carousel>
                    <Carousel.Item interval={3000}>
                        <img
                            className="mx-auto d-block w-50"
                            src="https://images.stockx.com/images/Nike-Lebron-7-Los-Angeles-Dodgers.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1613645246"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={3000}>
                        <img
                            className="mx-auto d-block w-50"
                            src="https://images.stockx.com/images/Air-Jordan-4-Retro-White-Oreo-2021-GS.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1614141824"
                            alt="Second slide"
                        />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="mx-auto d-block w-50"
                            src="https://images.stockx.com/images/adidas-Yeezy-450-Cloud-White-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1615564111"
                            alt="Third slide"
                        />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
            <div>
                <SneakerDisplay />
            </div>
        </div>

    );


}

export default HomePage;
