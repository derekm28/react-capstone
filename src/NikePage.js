import React from 'react';
//import Sneakercard from './Sneakercard';

function NikePage(props){
    return(
        <div className = 'FrontPage'>
            <h1 className = 'FrontPage-title'>Nike Page</h1>
            <h2 className = 'FrontPage-title'>Displays SneakerCards for Nike shoes</h2>
            <div className = 'FrontPage-cards'>
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

export default NikePage;
