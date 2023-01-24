import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { imageLayer } from '../../helpers/imageLayer'

export const PanelContainer = ({ arr, title }) => {
    const { setTool, image, setImage } = useContext(storeContext)

    return (
        <div className='panel_layers bg-light shadow' >
            <div className='d-flex justify-content-between p-2 bg-primary text-white align-items-center'>
                <h5>Select Image</h5>
                <button type="button" className="btn-close btn-close-white" aria-label="Close" ></button>
            </div>
            <div className='overflow-scroll' style={{ height: '100%' }}>
                {
                    imageLayer.map(x => (
                        <div className={`card p-2 `} style={{ width: '100%' }} >
                            <button className='btn btn-outline-light border p-1' onClick={() => setImage(x.url)}><img src={x.url} width={80} alt="" /></button>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
