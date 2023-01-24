import React, { useContext, useEffect } from 'react'
import { MapContainer, Marker, Polyline, Popup, TileLayer, Polygon, ImageOverlay } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { storeContext } from '../../context/storeContext'
import { EventActions } from './EventActions'
import { ButtonFloat } from './ButtonFloat'
import { customMarker, iconLocation } from '../../helpers/icons'
import { imageLayer } from '../../helpers/imageLayer'
import { LatLngBounds } from 'leaflet'

export const Map = () => {
    const { current, data, configMap,image, images } = useContext(storeContext)
    console.log('render map')

    useEffect(() => {
        document.body.classList.toggle('click', true)
    }, [])
    

    return (
        <>
            <MapContainer className="map" center={[-45.5712, -72.0685]} zoom={14} scrollWheelZoom={true} zoomControl={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url={configMap.layer}
                />
                
                <EventActions />
                {
                    current.item == 'line' && 
                    <>
                    <Polyline pathOptions={{ color: current.color }} dashArray={'5'} positions={current.position} />
                    <Marker icon={iconLocation} key={Date.now()} position={current.position.length == 1 ? current.position[0] : current.position[Math.floor(current.position.length / 2)]}>
                        <Popup>
                            {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                        </Popup>
                    </Marker>
                    </>
                }
                {
                    current.item == 'poly' && < Polygon pathOptions={{ color: current.color }} positions={current.position} />
                }
                {
                    current.item == 'location' &&
                    <Marker icon={iconLocation} key={Date.now()} position={current.position[0]}>
                        <Popup>
                            {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                        </Popup>
                    </Marker>
                }
                {
                    current.item == 'image' && current.position.length > 1 &&
                    <ImageOverlay
                    url={image}
                    bounds={new LatLngBounds([current.position[0].lat, current.position[0].lng],[current.position[1].lat, current.position[1].lng])}
                    opacity={0.5}
                    zIndex={9999}
                />
                }
                
{
    images.map(x => x)
}
                {
                    data.map((x, i) => x.item)
                }
            </MapContainer>
            {
                current.position.length > 0 &&
                <ButtonFloat />
            }
        </>

    )
}
