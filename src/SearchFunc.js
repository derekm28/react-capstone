import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';

function SearchFunc (){
    const [shoe, setShoe] = useState(null);
    const [url, setUrl] = useState("https://api.thesneakerdatabase.com/v1/sneakers?limit=10");

    const search = term => {
        setUrl(`https://api.thesneakerdatabase.com/v1/sneakers?limit=10&brand=${term}`);
    };

    useEffect(() => {
        const res = axios.get(url);
        setShoe(res.data.results[0].name);
    }, [url])

    return (
        <div>
            {shoe ? <h1>Shoe: {shoe}</h1> : <h1>Loading...</h1>}
            <SearchForm search={search} />
        </div>
    );
};

export default SearchFunc;
