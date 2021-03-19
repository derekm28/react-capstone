import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Sneakercard from './Sneakercard';


function JordanPage(props){
        const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan";

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
                    <h1>{sneakers[3].brand}</h1>
                </div>
                <div>
                    <h1>{sneakers[3].name}</h1>
                </div>
                <div>
                    <h1>{sneakers[3].retailPrice}</h1>
                </div>
                <div>
                    <img src={sneakers[3].media.smallImageUrl}/>
                </div>
            </div>
        }


    return(
        <div className = 'FrontPage'>
            <h1 className = 'FrontPage-title'>Jordan Page</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Jordan shoes</h2>
            <div>
                {content}
            </div>
        </div>
    );
}

export default JordanPage;
