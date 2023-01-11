import React, { useContext} from 'react'
import { MapContainer, Marker, Polyline, Popup, TileLayer, Polygon } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import { storeContext } from '../../context/storeContext'
import { EventActions } from './EventActions'
import { ButtonFloat } from './ButtonFloat'
import { iconLocation } from '../../helpers/icons'

export const Map = () => {
    const { current, data } = useContext(storeContext)
    return (
        <>
            <MapContainer className="map" center={[-45.5712, -72.0685]} zoom={14} scrollWheelZoom={true} zoomControl={false} >
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
                />
                <Marker icon={iconLocation} position={[51.505, -0.09]}>
                    <Popup>
                        A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <EventActions />
                {
                    current.item == 'line' ?
                        <Polyline pathOptions={{ color: current.color }} positions={current.position} />
                        :
                        (current.item == 'location' ?
                            <Marker icon={iconLocation} key={Date.now()} position={current.position[0]}>
                                <Popup>
                                    {/* A pretty CSS3 popup. <br /> Easily customizable. */}
                                </Popup>
                            </Marker>
                            :
                            <Polygon pathOptions={{ color: current.color }} positions={current.position} />
                        )

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
