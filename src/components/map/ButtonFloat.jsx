import { LatLngBounds } from 'leaflet'
import React, { useContext } from 'react'
import { ImageOverlay, Marker, Polygon, Polyline, Popup } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'
import { customMarker, iconLocation } from '../../helpers/icons'

export const ButtonFloat = () => {

    const { current, tool, setCurrent, setTool, addData, image, addImage } = useContext(storeContext)


    const handleDelete = () => {
        setCurrent({
            ...current,
            item: '',
            position: []
        })
        setTool('')
    }

    const handleSave = () => {
        if (tool == 'poly') addData(<Polygon key={Date.now()} pathOptions={{ color: current.color }} positions={current.position} />, current.position[0], 'poly', 1)
        if (tool == 'line') addData(<Polyline key={Date.now()} pathOptions={{ color: current.color }} positions={current.position} />, current.position[0], 'line', 2)
        if (tool == 'location') addData(<Marker key={Date.now()} icon={iconLocation} position={current.position[0]}></Marker>, current.position[0], 'location', 3)

        // IMAGENES
        if (tool == 'image') addImage(<ImageOverlay
        key={image}
            url={image}
            bounds={new LatLngBounds([current.position[0].lat, current.position[0].lng],[current.position[1].lat, current.position[1].lng])}
            opacity={0.5}
            zIndex={9999}
        />)

    }

    const handleDeshacer = () => {
        let deleteLastPos = current.position.filter((x, i) => i != current.position.length - 1)
        setCurrent({ ...current, position: deleteLastPos })

    }

    return (
        <div className='panel_buttons_float d-flex'>
            <button className='bg-success text-white btn_float rounded-circle' onClick={handleSave}><i className="fa-solid fa-floppy-disk"></i></button>
            <button className='bg-danger text-white btn_float rounded-circle' onClick={handleDelete}><i className="fa-solid fa-trash"></i></button>
            {
                (tool == 'poly' || tool == 'line') &&
                <button className='bg-warning text-white btn_float rounded-circle' onClick={handleDeshacer}><i className="fa-solid fa-rotate-right"></i></button>
            }
        </div>
    )
}
