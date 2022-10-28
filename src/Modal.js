import Modal from 'react-bootstrap/Modal';
import React from 'react';
import {  Button } from 'react-bootstrap';



function ModalCard(props) {
const {sneaker} = props;
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
                            {sneaker.title}
                            {sneaker.brand}

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
