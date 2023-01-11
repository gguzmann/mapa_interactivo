import React, { useContext } from 'react'
import { storeContext } from '../../context/storeContext'

export const Tools = () => {

  const { tool, setTool, current, setCurrent, map } = useContext(storeContext)

  return (
    <div className='panel_tools bg-light shadow'>
      <div className='d-flex justify-content-center mt-3'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'line' && 'active'}`} onClick={() => setTool('line')}><i className="fa-solid fa-pencil"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'poly' && 'active'}`} onClick={() => setTool('poly')}><i className="fa-solid fa-vector-square"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-primary w-75 d-flex justify-content-center ${tool == 'location' && 'active'}`} onClick={() => setTool('location')}><i className="fa-solid fa-location-dot"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <label style={{ color: current.color }} className='btn btn-outline-primary w-75 d-flex justify-content-center' htmlFor="colorTool"><i className="fa-solid fa-droplet"></i></label>
        <input type="color" name="colorTool" id="colorTool" value={'#bf1f0d'} onChange={(e) => setCurrent({ ...current, color: e.target.value })} hidden />
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center  ${tool == 'layer' && 'active'}`} onClick={() => setTool('layer')} disabled><i className="fa-solid fa-layer-group"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center ${tool == 'initialPos' && 'active'}`} onClick={() => setTool('initialPos')} disabled><i className="fa-solid fa-street-view"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center ${tool == 'image' && 'active'}`} onClick={() => setTool('initialPos')} disabled><i className="fa-solid fa-image"></i></button>
      </div>
      <div className='d-flex justify-content-center mt-1'>
        <button className={`btn btn-outline-secondary w-75 d-flex justify-content-center ${tool == 'initialPos' && 'active'}`} onClick={() => setTool('initialPos')} disabled><i className="fa-solid fa-gear"></i></button>
      </div>
    </div>
  )
}
