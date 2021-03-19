import React, { useState, useEffect } from 'react';
import axios from 'axios';
//import Sneakercard from './Sneakercard';


function JordanPage(props){
        const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=jordan";
        const [sneakers, setSneakers] = useState(null);


        useEffect(() => {
            axios.get(url).then(res => {
                setSneakers(res.data.results[0].name)
            });
        }, [url])


    return(
        <div className = 'FrontPage'>
            <h1 className = 'FrontPage-title'>Jordan Page</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Jordan shoes</h2>

            {sneakers ? <h1>Shoe: {sneakers}</h1> : <h1>Loading...</h1>}
        </div>
    );
}

export default JordanPage;
