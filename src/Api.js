import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ApiRequest({ brand = 'adidas' }) {
    const [data, setData] = useState(null);
    //const [res, setRes] = useState(null);
    useEffect(() => {
        axios.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=${brand}`).then(res => {
            setData(res.data.results[1].name)
        })
    }, [brand])

    useEffect(() => {
        axios.get(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=${brand}`).then(res => {
            console.log(res.data.results[0].name)
        })
    }, [brand])

    return (
        <div>
            {/* <h3>{ res }</h3> */}
            <h3>{data ? data : 'Loading...'}</h3>
        </div>
    )
}

export default ApiRequest;
