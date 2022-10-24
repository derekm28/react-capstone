import Modal from 'react-bootstrap/Modal';
import React, { useState, useEffect } from 'react';
import { useParams } from "react-router-dom";
import { Card, Button } from 'react-bootstrap';
import axios from 'axios';


function ModalCard(props) {

    return (
        <div>
                <Modal
                    {...props}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                    >
                    <Modal.Header closeButton>
                        <Modal.Title
                            id="contained-modal-title-vcenter"
                            text="center">
                            Shoe Title
          </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Shoe Details
        </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={props.onHide}>Close</Button>
                    </Modal.Footer>
                </Modal>
        </div>

    );
}

export default ModalCard;
