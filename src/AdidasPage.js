import React, { useState, useEffect } from 'react';
//import Sneakercard from './Sneakercard';
import axios from 'axios';
import SneakerList from './SneakerList';



function AdidasPage(){
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=adidas";
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
        </div>

    }

    return(
        <div className = 'FrontPage'>
            <h1 className = 'FrontPage-title'>Adidas Page</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Adidas shoes</h2>
            <div>
                {content}
            </div>
        </div>
    );
}

export default AdidasPage;
