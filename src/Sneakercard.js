import React from 'react';
import { Link } from 'react-router-dom';

//returns sneaker card of sneaker
//rendered by sneakercard list to show a card for each shoe
//sneakercardlist -> sneakercard

function SneakerCard({ title, brand, colorway, name, releaseDate, retailPrice, shoe, year, image }){
    console.debug('Sneakercard');

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
            <img src={image}/>
            </div>
        </div>
    );
}

export default SneakerCard;
