import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


function BalenciagaPage(props) {
    // const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=jordan";

    const [sneakers, setSneakers] = useState(null);

    // useEffect(() => {
    //     async function getSneakers(){
    //     axios.get(url).then(res => {
    //         setSneakers(res.data.results);
    //     });
    // }
    // getSneakers();
    // }, [url])

    const balenciagas = {
        method: 'GET',
        url: 'https://v1-sneakers.p.rapidapi.com/v1/sneakers',
        params: { limit: '100', brand: 'balenciaga' },
        headers: {
            'x-rapidapi-key': 'd35e6f2cf6msh582d393a4408760p1fd4ddjsna38953b14404',
            'x-rapidapi-host': 'v1-sneakers.p.rapidapi.com'
        }
    };
    useEffect(() => {
        async function getSneakers() {
          axios.request(balenciagas).then(res => {
            setSneakers(res.data.results)
            // .catch(function (error) {
            //     console.error(error);
            // });
          });
        }
        getSneakers();
      })


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
                                <div>{s.colorway}</div>
                                <div>Release Date: {s.releaseDate}</div>
                                <div>Retail Price: ${s.retailPrice}</div>
                            </Card.Text>
                            <Button variant="primary">Save</Button>
                        </Card.Body>
                    </Card>
                ))
                : null}
        </div>
    );
}

return (
    <div className='FrontPage'>
        <Jumbotron fluid>
            <Container>
                <Row>
                    {/* <h1>Jordan</h1> */}
                    <Col xs={6} md={4}>

                    </Col>
                    <Col xs={6} md={4}>
                        <Image src="https://1000logos.net/wp-content/uploads/2020/07/Balenciaga-logo.png" roundedCircle thumbnail />
                    </Col>
                    {/* <Col xs={6} md={4}>
                            <Image src="https://i1.wp.com/sportsfinding.com/wp-content/uploads/2020/02/nike-swoosh-wikipedia.jpg?fit=580%2C350&ssl=1" thumbnail />
                        </Col> */}
                </Row>
            </Container>
        </Jumbotron>
        <div>
            <SneakerDisplay />
        </div>
    </div>
);
    }

export default BalenciagaPage;
