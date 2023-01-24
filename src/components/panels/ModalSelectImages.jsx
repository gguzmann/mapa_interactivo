import React, { useContext, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { imageLayer } from '../../helpers/imageLayer'
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import { storeContext } from '../../context/storeContext';

export const ModalSelectImages = () => {
  const [open, setOpen] = useState(true)
  const handleClose = () => setOpen(false)
  const handleShow = () => setOpen(true)

  const { setImage } = useContext(storeContext)

  const handleSelectImage = (img) => {
    setImage(img)
    handleClose()
  }

  return (
    <>
    {/* <Button onClick={handleShow}>Select</Button> */}
      <Modal
        show={open}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Select Image</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className='d-flex flex-wrap gap-1'>
            {
              imageLayer.map((x, i) => <button className='btn btn-outline-light border p-1' onClick={() => handleSelectImage(x.url)} key={x.url + i}><img src={x.url} width={80} alt="" /></button>)
            }
          </div>
        </Modal.Body>
      </Modal>
    </>
  )
}
