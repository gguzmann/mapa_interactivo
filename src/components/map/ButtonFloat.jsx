import React, { useContext } from 'react'
import { Marker, Polygon, Polyline, Popup } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'

export const ButtonFloat = () => {

    const { current, tool, setCurrent, setTool, addData } = useContext(storeContext)


    const handleDelete = () => {
        setCurrent({
            ...current,
            item: '',
            position: []
        })
        setTool('')
    }

    const handleSave = () => {
        if (tool == 'poly') addData(<Polygon key={Date.now()} pathOptions={{ color: current.color }} positions={current.position} />)
        if (tool == 'line') addData(<Polyline key={Date.now()} pathOptions={{ color: current.color }} positions={current.position} />)
        if (tool == 'location') addData(<Marker key={Date.now()} position={current.position[0]}></Marker>)

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
                tool != 'location' &&
                <button className='bg-warning text-white btn_float rounded-circle' onClick={handleDeshacer}><i className="fa-solid fa-rotate-right"></i></button>
            }
        </div>
    )
}
