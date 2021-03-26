import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ApiRequest from './Api';
import SneakerCard from './SneakerCard';
import SneakerCardList from './SneakerCardList';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";


function NikePage() {
    console.debug('NikePage');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=nike";

    const [sneakers, setSneakers] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url).then(res => {
            setSneakers(res.data.results)
        });
    }, [url])

    if (sneakers) {
        content =
            <div>
                <div>
                    <h1>{sneakers[0].brand}</h1>
                </div>
                <div>
                    <h1>{sneakers[0].name}</h1>
                </div>
                <div>
                    <h1>{sneakers[0].retailPrice}</h1>
                </div>
                <div>
                    <img src={sneakers[0].media.smallImageUrl} />
                </div>
                <div>
                    <SneakerCardList sneakers={sneakers} />
                </div>
            </div>
    }

    else {
        <h1>Loading...</h1>
    }

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
                        {s.colorway}
                      </Card.Text>
                    </Card.Body>
                  </Card>
                ))
              : null}
          </div>
        );
      }
      return (
        <div className='NikePage'>
            <h1 className='NikePage-title'>Nike Page</h1>
            <h2 className='NikePage-title'>Displays SneakerCards for Nike shoes</h2>
            <div className='NikePage-cards'>
                <div>
                    <SneakerDisplay />
                </div>
                <div>
                    {content}
                </div>
            </div>
        </div>
    );
}


export default NikePage;
