import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Card, Button } from "react-bootstrap";
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function WomensPage(props){
        const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&gender=women";

        const [sneakers, setSneakers] = useState(null);

        useEffect(() => {
            async function getSneakers(){
            axios.get(url).then(res => {
                setSneakers(res.data.results);
            });
        }
        getSneakers();
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

    return(
        <div className = 'FrontPage'>
            <Jumbotron fluid>
                <Container>
                    <h1>Women's</h1>
                </Container>
            </Jumbotron>
            <div>
                <SneakerDisplay />
            </div>
        </div>
    );
}

export default WomensPage;
