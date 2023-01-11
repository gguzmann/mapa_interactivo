import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'

export const ModalEditItem = () => {

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleShow = () => setOpen(true)

    return (
        <>
        <Button onClick={handleShow}>Edit</Button>
            <Modal
                show={open}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Item</Modal.Title>
                </Modal.Header>
                <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}
