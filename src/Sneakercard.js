import React from 'react';
import { Link } from 'react-router-dom';

//returns sneaker card of sneaker

function SneakerCard({ title, brand, colorway, name, releaseDate, retailPrice, shoe, }){
    console.debug('Sneakercard');

    return (
        <div className='SneakerCard card'>
            <div className='card-body'>
            <h6 className='card-title'>{title}</h6>
            <p>{brand}</p>
            <p>{name}</p>
            <p>{shoe}</p>
            </div>
        </div>
    );
}

export default SneakerCard;
