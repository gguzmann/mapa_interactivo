import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'
import { ModalSelectImages } from './ModalSelectImages'
import { PanelContainer } from './PanelContainer'
import { PanelLayers } from './PanelLayers'

export const Tools = () => {

  const { tool, setTool, current, setCurrent, map } = useContext(storeContext)

  const handleClick = (tool) => {
    setCurrent({ ...current, position: [], item: '' })
    setTool(tool)
  }

  const handleLayer = () => {
    handleClick('layer')
  }

  const handleChangeColor = (e) => setCurrent({ ...current, color: e.target.value })

  return (
    <div className='panel_tools bg-light shadow'>
      <div className='d-flex justify-content-center mt-3'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'line' && 'active'}`} onClick={() => handleClick('line')}><i className="fa-solid fa-pencil"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'poly' && 'active'}`} onClick={() => handleClick('poly')}><i className="fa-solid fa-vector-square"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'location' && 'active'}`} onClick={() => handleClick('location')}><i className="fa-solid fa-location-dot"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <label style={{ color: current.color }} className='btn btn-outline-primary w-75 d-flex justify-content-center' htmlFor="colorTool"><i className="fa-solid fa-droplet"></i></label>
        <input type="color" name="colorTool" id="colorTool" value={'#bf1f0d'} onChange={handleChangeColor} hidden />
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center  ${tool == 'layer' && 'active'}`} onClick={handleLayer}><i className="fa-solid fa-layer-group"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center ${tool == 'initialPos' && 'active'}`} onClick={() => handleClick('initialPos')} disabled><i className="fa-solid fa-street-view"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'image' && 'active'}`} onClick={() => handleClick('image')}><i className="fa-solid fa-image"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center ${tool == 'initialPos' && 'active'}`} onClick={() => handleClick('initialPos')} disabled><i className="fa-solid fa-gear"></i></button>
      </div>
      {
        tool == 'layer' &&
        <PanelLayers />
      }
      {
        tool == 'image' &&
        <ModalSelectImages />
      }
    </div>
  )
}
