import React, { useContext, useState } from 'react'
import { Button, Form, Modal } from 'react-bootstrap'
import { storeContext } from '../../context/storeContext'

export const ModalEditItem = ({index, item}) => {

    const { editData } = useContext(storeContext)


    const [value, setValue] = useState({
        index,
        title: item.title,
        description: item.description
    })

    const [open, setOpen] = useState(false)
    const handleClose = () => setOpen(false)
    const handleShow = () => setOpen(true)
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(value)
        editData(index, value)
    }

    const handleChange = (e) => {
        setValue({...value, [e.target.name]: e.target.value})
    }

    return (
        <>
            <Button onClick={handleShow}><i className="fa-solid fa-pen-to-square"></i></Button>
            <Modal
                show={open}
                onHide={handleClose}
            >
                <Modal.Header closeButton>
                    <Modal.Title>Editar Item</Modal.Title>
                </Modal.Header>
                <Form onSubmit={handleSubmit}>
                    <Modal.Body>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Title</Form.Label>
                            <Form.Control type="text" placeholder="" name="title" value={value.title} onChange={handleChange} required/>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Description</Form.Label>
                            <Form.Control as="textarea" rows={3} name="description" value={value.description} onChange={handleChange} required/>
                        </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" type="submit">
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    )
}
