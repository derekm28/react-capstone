import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import ApiRequest from './Api';
import SneakerCard from './SneakerCard';
import SneakerCardList from './SneakerCardList';

function NikePage(){
    console.debug('NikePage');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=nike";

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
                <h1>{sneakers[0].brand}</h1>
            </div>
            <div>
                <h1>{sneakers[0].name}</h1>
            </div>
            <div>
                <h1>{sneakers[0].retailPrice}</h1>
            </div>
            <div>
                <img src={sneakers[0].media.smallImageUrl}/>
            </div>
            <div>
            <SneakerCardList sneakers={sneakers} />
        </div>
        </div>
    }

    else{
        <h1>Loading...</h1>
    }

    return(
        <div className = 'NikePage'>
            <h1 className = 'NikePage-title'>Nike Page</h1>
            <h2 className = 'NikePage-title'>Displays SneakerCards for Nike shoes</h2>
            <div className = 'NikePage-cards'>
            <div>
                {content}
            </div>
            </div>
        </div>
    );
}

export default NikePage;
