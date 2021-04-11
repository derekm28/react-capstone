import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";
import UserContext from './UserContext';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';


function NikePage(sneakerId) {
    console.debug('NikePage');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=nike";

    const [sneakers, setSneakers] = useState(null);
    const [saved, setSaved] = useState();
    const Save = () => {
        const { hasSavedSneaker, saveSneaker } = useContext(UserContext);


        React.useEffect(function updateSavedStatus() {
            console.debug('SneakerCard useEffect updateSavedStatus', 'id=', sneakerId);
            setSaved(hasSavedSneaker(sneakerId));
        }, [sneakerId, hasSavedSneaker]);
    }

    /**Save sneaker to profile */
    // async function handleSave(evt) {
    //     if (hasSavedSneaker(sneakerId)) return;
    //     saveSneaker(sneakerId);
    //     setSaved(true);
    // }

    // return(
    //     <div className='SneakerCard card'> {saved}
    //         <div className='card-body'>
    //         <h6 className='card-title'>{title}</h6>
    //         <p>{brand}</p>
    //         <p>{colorway}</p>
    //         <p>{shoe}</p>
    //             <button
    //                 className='btn btn-danger font-weight-bold text-uppercase float-right'
    //                 onClick={handleSave}
    //                 disabled={saved}>
    //                     {saved ? 'Saved' : 'Save'}
    //                 </button>
    //         </div>
    //     </div>
    // );

    useEffect(() => {
        async function getSneakers(){
        axios.get(url).then(res => {
            setSneakers(res.data.results);
        });
    }
    getSneakers();
    }, [url])

    function SneakerDisplay() {
        return (
            <div className="row justify-content-center ">
                {sneakers
                    ? sneakers.map((s, idx) => (
                        <Card
                            key={s.id}
                            className="mr-2"
                            title={s.title}
                            brand={s.brand}
                            colorway={s.colorway}
                            style={{ width: "18rem" }}
                            shoe={s.shoe}
                            name={s.name}>
                            <Card.Body>
                                <Card.Img variant="top" src={s.media.smallImageUrl} />
                                <Card.Title>{s.title}</Card.Title>
                                <Card.Text>
                                    <div>{s.colorway}</div>
                                    <div>Release Date: {s.releaseDate}</div>
                                    <div>Retail Price: ${s.retailPrice}</div>
                                </Card.Text>
                                <Button variant="primary" className='btn btn-danger font-weight-bold text-uppercase'
                                    //onClick={handleSave}
                                    disabled={saved}>
                                    {saved ? 'Saved' : 'Save'}</Button>
                            </Card.Body>
                        </Card>
                    ))
                    : null}
            </div>
        );
    }
    return (
        <div className='NikePage'>
            <Jumbotron fluid>
                <Container>
                    <h1>Nike</h1>
                </Container>
            </Jumbotron>
            <div className='NikePage-cards'>
                <div>
                    <SneakerDisplay />
                </div>
            </div>
        </div>
    );
}


export default NikePage;
