import { map } from 'leaflet'
import React, { useContext } from 'react'
import { Modal } from 'react-bootstrap'
import { MapContainer, TileLayer } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'
import { layersTile } from '../../helpers/mapLayer'

export const ModalLayers = () => {
  const { setConfigMap, configMap} = useContext(storeContext)

    return (
        <Modal
            show={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Layers</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='d-flex gap-1'>
                    {
                        layersTile.map(x => (
                            <div className='card' style={{ width: '200px' }} onClick={() => setConfigMap({...map, layer: x.url})}>
                                <MapContainer style={{width: '100%', height:'200px'}} center={[-45.5712, -72.0685]} zoom={10} scrollWheelZoom={true} zoomControl={false} >
                                    <TileLayer
                                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                        url={x.url}
                                        onClick={() => console.log('map')}
                                    />
                                    </MapContainer>
                            </div>
                        ))
                    }
                </div>
            </Modal.Body>
        </Modal>
    )
}
