import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const ConfirmacionModal = ({ show, handleClose, handleConfirm }) => {
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Confirmación</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                ¿Estás seguro/a de que deseas eliminar este registro?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Cancelar
                </Button>
                <Button variant="danger" onClick={handleConfirm}>
                    Eliminar
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default ConfirmacionModal;
