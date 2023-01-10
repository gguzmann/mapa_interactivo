import { useContext } from 'react'
import { Marker, Popup, useMapEvents } from 'react-leaflet'
import { storeContext } from '../../context/storeContext'

export const EventActions = () => {

    const { current, setCurrent, tool, data, setData } = useContext(storeContext)

    const map = useMapEvents({
        mousemove(e) {
            // console.log(e.latlng)
        },
        click(e) {
            // console.log(e.latlng)
            setCurrent({...current,
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


                default:
                    break;
            }

        }
    })

}
