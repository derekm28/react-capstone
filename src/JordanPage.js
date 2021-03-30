import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SneakerCard from './SneakerCard';
import { Card, Button } from "react-bootstrap";


function JordanPage(props){
        const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=jordan";

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
            <h1 className = 'FrontPage-title'>Jordan</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Jordan shoes</h2>
            <div>
                <SneakerDisplay />
            </div>
        </div>
    );
}

export default JordanPage;
