import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { ModalEditItem } from './ModalEditItem'

export const Item = ({item}) => {
    const { map } = useContext(storeContext)

    return (
        <div type="button" className="list-group-item list-group-item-action" onClick={() => map.flyTo(item.coords, 15)}>
            {/* explicabo illo est libero  */}
            <div className="d-flex w-100 justify-content-between">
                <h5 className="mb-1">Header</h5>
                <small>Small</small>
            </div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a sunt unde
            <ModalEditItem/>
        </div>
    )
}
