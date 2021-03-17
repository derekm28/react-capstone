import React from 'react';
import SneakerCard from './SneakerCard';

function HomePage(props){
    return(
        <div className = 'HomePage'>
            <h1 className = 'HomePage-title'>Home Page</h1>
            <div className = 'HomePage-cards'>
                {/* {props.sneakers.map(s => (
                    <Sneakercard
                        brand = {s.id}
                        colorway = {s.colorway}
                        name = {s.name}
                        releaseDate = {s.releaseDate}
                        retailPrice = {s.retailPrice}
                        shoe = {s.shoe}
                        title = {s.title}
                        year = {s.year}
                    />
                ))} */}
            </div>
        </div>
    );
}

export default HomePage;
