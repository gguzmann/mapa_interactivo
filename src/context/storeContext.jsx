import { createContext, useContext, useState } from "react";

export const storeContext = createContext()

export const useStore = () => useContext(storeContext)

export function StoreProvider({ children }) {

    const [current, setCurrent] = useState({
        color: '#bf1f0d',
        position: []
    })

    const [data, setData] = useState([])

    const [tool, setTool] = useState('')
    const [configMap, setConfigMap] = useState({
        coordInitial: [1, 1],
        zoom: true,
        maxZoom: 0,
        minZoom: 0,
        canMove: true,
        title: ''
    })

    const addData = (item) => {
        setData([
            ...data,
            {
                text: 'asd',
                coords: [],
                item
            }
            ])
            setCurrent({
                ...current,
                item: '',
                position: []
            })
            setTool('')
    }
    return (
        <storeContext.Provider value={{ data, setData, tool, setTool, configMap, setConfigMap, current, setCurrent, addData }}>
            {children}
        </storeContext.Provider>
    )
}