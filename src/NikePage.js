import React, { useState, useEffect } from 'react';
import ApiRequest from './Api';
import SneakerCard from './SneakerCard';
//import SneakerCardList from './SneakerCardList';

function NikePage(){
    console.debug('NikePage');

    const [sneakers, setSneakers] = useState(null);

    useEffect(function getAllSneakersOnMount(){
        search();
    }, []);

    async function search(nike){
        let sneakers = await ApiRequest.getSneakers(nike);
        setSneakers(sneakers);
    }

    return(
        <div className = 'NikePage'>
            <h1 className = 'NikePage-title'>Nike Page</h1>
            <h2 className = 'NikePage-title'>Displays SneakerCards for Nike shoes</h2>
            <div className = 'NikePage-cards'>
            {sneakers.map(sneaker => (
                <SneakerCard
                    title={sneaker.title}
                    name={sneaker.name}
                    shoe={sneaker.shoe}
                    brand={sneaker.brand}
                />
            ))}
            </div>
        </div>
    );
}

export default NikePage;
