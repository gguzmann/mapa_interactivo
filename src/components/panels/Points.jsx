import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { Item } from './Item'

export const Points = () => {

    const { data } = useContext(storeContext)

    return (
        <div className='panel_points shadow bg-light'>
            <div className="p-3 border-bottom bg-primary text-white">
                <h3>Puntos de interes</h3>
            </div>
            <div className="list-group">
                {
                    data.map((x, i) => <Item key={i} item={x} index={i}/> )

                }
            </div>
        </div>
    )
}
