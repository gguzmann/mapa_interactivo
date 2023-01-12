import React, { useContext } from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'
import { layersTile } from '../../helpers/mapLayer'

export const PanelLayers = () => {
  const { setConfigMap, configMap, setTool} = useContext(storeContext)

    return (
        <div className='panel_layers bg-light shadow'>
            <div className='d-flex justify-content-between p-2 bg-primary text-white align-items-center'>
            <h5>Select Layer</h5>
            <button type="button" className="btn-close btn-close-white" aria-label="Close" onClick={() => setTool('')}></button>
            </div>
            <div className='overflow-scroll' style={{height: '100%'}}>
                {
                    layersTile.map(x => (
                        <div className={`card p-2 ${configMap.layer == x.url && 'bg-primary'}`} style={{ width: '200px' }} onClick={() => setConfigMap({ ...configMap, layer: x.url })}>
                            <MapContainer style={{ width: '100%', height: '100px' }} center={[-45.5712, -72.0685]} zoom={10} scrollWheelZoom={false} zoomControl={false} dragging={false} >
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
        </div>
    )
}
