import React from 'react';
import ApiRequest from './Api';

//returns sneaker card of sneaker

function Sneakercard(props){
    //let imgSrc = `${SNEAKER_API}${imageUrl}`

    return (
        <div className = "Sneakercard">
            <div className = 'Sneakercard-brand'>{props.brand}</div>
            {/* <img className = 'Sneakercard-image' src = {imgSrc} /> */}
            <div className = 'Sneakercard-data'>Colorway: {props.colorway}</div>
            <div className = 'Sneakercard-data'>Name: {props.name}</div>
            <div className = 'Sneakercard-data'>Release Date: {props.releaseDate}</div>
            <div className = 'Sneakercard-data'>Retail Price: {props.retailPrice}</div>
            <div className = 'Sneakercard-data'>Shoe: {props.shoe}</div>
            <div className = 'Sneakercard-data'>Title: {props.title}</div>
            <div className = 'Sneakercard-data'>Year: {props.year}</div>
        </div>
    );
}

export default Sneakercard;
