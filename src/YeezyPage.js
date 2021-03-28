import React, { useState, useEffect } from 'react';
//import Sneakercard from './Sneakercard';
import axios from 'axios';
import SneakerCardList from './SneakerCardList';
import { Card, Button } from "react-bootstrap";



function YeezyPage(){
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&name=yeezy&brand=adidas";

    const [sneakers, setSneakers] = useState(null);

    let content = null;

    useEffect(() => {
        axios.get(url).then(res => {
            setSneakers(res.data.results)
        });
    }, [url])

    if(sneakers){
        content =
        <div>
            <div>
                <h1>{sneakers[2].brand}</h1>
            </div>
            <div>
                <h1>{sneakers[2].name}</h1>
            </div>
            <div>
                <h1>{sneakers[2].retailPrice}</h1>
            </div>
            <div>
                <img src={sneakers[2].media.smallImageUrl}/>
            </div>
            <div>
            <SneakerCardList sneakers={sneakers} />
        </div>
        </div>

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
            <h1 className = 'FrontPage-title'>Yeezy</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Yeezy shoes</h2>
            <div>
                <SneakerDisplay />
            </div>
        </div>
    );
}

export default YeezyPage;
