import React, { useContext } from 'react'
import { Button } from 'react-bootstrap'
import { storeContext } from '../../context/storeContext'
import { ModalEditItem } from './ModalEditItem'

export const Item = ({item, index}) => {
    const { map, deleteData } = useContext(storeContext)

    return (
        <div className='list-group-item list-group-item-action'>
        <div type="button" className="" onClick={() => map.flyTo(item.coords, 13)}>
            {/* explicabo illo est libero  */}
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">{item.title}</h5>
                <small>{index} <i className="fa-solid fa-location-dot"></i> </small>
            </div>
            {item.description}
        </div>
        <div className='d-flex justify-content-end gap-1'>
            <ModalEditItem index={index} item={item}/>
            <Button variant='danger' onClick={() => deleteData(index)}><i className="fa-solid fa-trash"></i></Button>
        </div>
        </div>
    )
}
