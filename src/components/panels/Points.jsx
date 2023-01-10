import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'

export const Points = () => {

    const { data } = useContext(storeContext)

    return (
        <div className='panel_points shadow bg-light'>
            <div className="p-3 border-bottom bg-primary text-white">
                <h3>Puntos de interes</h3>
            </div>
            <div className="list-group">
                {
                    data.map((x, i) =>
                        <div key={i} type="div" className="list-group-item list-group-item-action">
                            {/* explicabo illo est libero  */}
                            <div className="d-flex w-100 justify-content-between">
                                <h5 className="mb-1">List group item heading</h5>
                                <small>3 days ago</small>
                            </div>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi a sunt unde
                        </div>
                    )

                }
            </div>
        </div>
    )
}
