import { useContext, useEffect } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'

export const EventActions = () => {

    const { current, setCurrent, tool, data, setData, setMap, setTool } = useContext(storeContext)


    const map = useMapEvents({
        mousemove(e) {
            
            if (tool == 'image' && current.position.length > 0 && current.position.length < 3) {
                let endPos = [current.position[0], e.latlng]
                setCurrent({ ...current, position: endPos, item: 'image' })
            }
        },
        click(e) {
            // console.log(e.latlng)
            setCurrent({
                ...current,
                position: []
            })
            switch (tool) {
                case 'line':
                    setCurrent({ ...current, position: [...current.position, e.latlng], item: 'line' })
                    break;
                case 'poly':
                    setCurrent({ ...current, position: [...current.position, e.latlng], item: 'poly' })
                    break;
                case 'location':
                    setCurrent({ ...current, position: [e.latlng], item: 'location' })
                    break;
                case 'image':
                    if (current.position.length < 3) {
                        setCurrent({ ...current, position: [...current.position, e.latlng], item: 'image' })
                    }
                    break;


                default:
                    break;
            }

        }
    })
    useEffect(() => {
        setMap(map)
    }, [map])


}
