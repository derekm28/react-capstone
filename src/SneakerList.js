import React, { useState, useEffect } from 'react';
import SearchForm from './SearchForm';
import ApiRequest from './api';
import LoadingSpinner from './LoadingSpinner';
import SneakerCard from './Sneakercard';

//Shows a list of sneakers loaded from API
//Reloads filtered sneakers on from search form
//Routes -> { SneakerCard, SearchForm }

function SneakerList(){
    console.debug('SneakerList');

    const [sneakers, setSneakers] = useState(null)

    useEffect(function getSneakersOnMount(){
        console.debug('SneakerList useEffect getSneakersOnMount');
        search()
    }, []);

    //triggered by search form submit; reloads sneakers

    async function search (name){
        let sneakers = await ApiRequest.getSneakers();
        setSneakers(sneakers)
    }

    if (!sneakers) return <LoadingSpinner />;

    return (
        <div className = 'SneakerList col-md-8 offset-md-2'>
            <SearchForm searchFor = {search} />
            {sneakers.length
                ? (
                    <div className = 'SneakerList-list'>
                        {sneakers.map(s => (
                            <SneakerCard
                                title = {s.title}
                                brand = {s.brand}
                                colorway = {s.colorway}
                                shoe = {s.shoe}
                                name = {s.name}
                                releaseDate = {s.releaseDate}
                                retailPrice = {s.retailPrice}
                                />
                                ))}
                    </div>
                ) : (
                    <p className = 'lead'>Sorry, no results were found!</p>
                )}
        </div>
    )
}

export default SneakerList;
