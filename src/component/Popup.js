import React from 'react';
import Modal from 'react-bootstrap/Modal';
import PlayerRecord from './PlayerRecord';
import CoachRecord from './CoachRecord';


function Popup({open, setPopup, callback, titleInfo}){
    const handleClose = () => {
    
        
        setPopup({open: false});
        if(callback){
            callback();
        }
      }
    
    return (
        <Modal show={open} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>{titleInfo === "PLAYER" ? "PLAYER" : "COACH"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {titleInfo === "PLAYER" ? <PlayerRecord /> : <CoachRecord />}

            </Modal.Body>
           
        </Modal>
    );
}

export default Popup;