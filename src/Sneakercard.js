import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import UserContext from './UserContext';
import { Card, Button } from "react-bootstrap";

//returns sneaker card of sneaker
//rendered by sneakercard list to show a card for each shoe
//sneakercardlist -> sneakercard

function SneakerCard({ title, brand, colorway, name, releaseDate, retailPrice, shoe, year, image, sneakerId }) {
    console.debug('Sneakercard');
    console.debug('NikePage');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=nike";

    const [sneakers, setSneakers] = useState(null);
    const { hasSavedSneaker, saveSneaker } = useContext(UserContext);
    const [saved, setSaved] = useState();

    React.useEffect(function updateSavedStatus() {
        console.debug('SneakerCard useEffect updateSavedStatus', 'id=', sneakerId);
        setSaved(hasSavedSneaker(sneakerId));
    }, [sneakerId, hasSavedSneaker]);

    /**Save sneaker to profile */
    async function handleSave(evt) {
        if (hasSavedSneaker(sneakerId)) return;
        saveSneaker(sneakerId);
        setSaved(true);
    }

    return (
        <div className='SneakerCard card'>
            <div className='card-body'>
                <h3 className='card title'>{title}</h3>
                <p>{brand}</p>
                <p>{name}</p>
                <p>{shoe}</p>
                <p>{year}</p>
                <p>{releaseDate}</p>
                <p>{retailPrice}</p>
                <p>{colorway}</p>
                <img src={image} />
                <Card
                    key={sneakerId}
                    className="mr-2"
                    title={title}
                    brand={brand}
                    colorway={colorway}
                    style={{ width: "18rem" }}
                    shoe={shoe}
                    name={name}>
                <Card.Body>
                      {/* <Card.Img variant="top" src={media.smallImageUrl} /> */}
                      <Card.Title>{title}</Card.Title>
                      <Card.Text>
                        {brand}
                        {name}
                        {shoe}
                        {colorway}
                        ${retailPrice}
                      </Card.Text>
                      <Button variant="primary" className='btn btn-danger font-weight-bold text-uppercase float-right'
                    onClick={handleSave}
                    disabled={saved}>
                        {saved ? 'Saved' : 'Save'}</Button>
                    </Card.Body>
                  </Card>
            </div>
        </div>
    );
}

export default SneakerCard;
