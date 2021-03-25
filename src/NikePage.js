import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ApiRequest from './Api';
import SneakerCard from './SneakerCard';
import SneakerCardList from './SneakerCardList';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";


function NikePage() {
    console.debug('NikePage');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=nike";

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


    function CardDisplay() {
        return [
          "Primary",
          "Secondary",
          "Success",
          "Danger",
          "Warning",
          "Info",
          "Light",
          "Dark",
        ].map((variant, idx) => (
          <Card
            bg={variant.toLowerCase()}
            key={idx}
            text={variant.toLowerCase() === "light" ? "dark" : "white"}
            style={{ width: "18rem" }}
            className="mb-2"
          >
            <Card.Header>Header</Card.Header>
            <Card.Body>
              <Card.Title>{variant} Card Title </Card.Title>
              <Card.Text>
                Card Text
              </Card.Text>
            </Card.Body>
          </Card>
        ));
      }

    //   function SneakerDisplay() {
    //     return (
    //         <div className='card'>
    //         {sneakers.map((s, idx) => (
    //             <Card
    //                 title = {s.title}
    //                 brand = {s.brand}
    //                 colorway = {s.colorway}
    //                 shoe = {s.shoe}
    //                 name = {s.name}
    //                 releaseDate = {s.releaseDate}
    //                 retailPrice = {s.retailPrice}
    //             >
    //         <Card.Body>
    //           <Card.Title>{s.title}</Card.Title>
    //           <Card.Text>
    //             {s.brand}
    //             {s.colorway}
    //           </Card.Text>
    //         </Card.Body>
    //       </Card>
    //     ))};
    //         </div>
    //     )
    //   }



    return (
        <div className='NikePage'>
            <h1 className='NikePage-title'>Nike Page</h1>
            <h2 className='NikePage-title'>Displays SneakerCards for Nike shoes</h2>
            <div className='NikePage-cards'>
                <div>
                    {content}
                </div>
                <div>
                    <CardDisplay />
                    {/* <SneakerDisplay /> */}
                    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={sneakers[0].media.smallImageUrl} />
      <Card.Body>
        <Card.Title></Card.Title>
        <Card.Text>
          Some Custom text one can write here
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
                </div>
            </div>
        </div>
    );
}

export default NikePage;
