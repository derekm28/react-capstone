import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';


function ModalCard(props) {
    console.debug('ModalCard');
    const url = "https://api.thesneakerdatabase.com/v1/sneakers?limit=100&brand=nike";

    const [sneakers, setSneakers] = useState(null);
    const [modalShow, setModalShow] = useState(false);

    useEffect(() => {
        async function getSneakers() {
            axios.get(url).then(res => {
                setSneakers(res);
            });
            if(modalShow){
                getSneakers();
            }
        }
        getSneakers();
    }, [url, modalShow])

    return (
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Shoe Title {JSON.stringify(sneakers)}
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Shoe Details
        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
    );
}

export default ModalCard;
