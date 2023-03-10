import { createContext, useContext, useState } from "react";

export const storeContext = createContext()

export const useStore = () => useContext(storeContext)

export function StoreProvider({ children }) {

    const [image, setImage] = useState('https://img.icons8.com/windows/512/bicycle.png')
    const [map, setMap] = useState(null)
    const [images, setImages] = useState([])
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
        title: '',
        layer: 'https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png'
    })

    const addImage = (item) => {
        setCurrent({
            ...current,
            item: '',
            position: []
        })
        setImages([...images, item])
        setTool('')

    }

    const deleteData = (index) => {
        const newData = data.filter((x,i) => i != index)
        setData(newData)
    }
    
    const addData = (item, coords, strItem, iconId) => {
        setData([
            ...data,
            {
                text: 'asd',
                coords,
                item,
                title: 'Title',
                description: 'Description.',
                iconId
            }
            ])
            setCurrent({
                ...current,
                item: '',
                position: []
            })
            setTool('')
    }

    const editData = (index, object) => {
        const editObject = data.map((x,i) => (index == i ? {...x, title:object.title, description: object.description} : x))
        setData(editObject)
    }
    return (
        <storeContext.Provider value={{ data, setData, tool, setTool, configMap, setConfigMap, current, setCurrent, addData, map, setMap, deleteData, editData, setImage, image, images, setImages, addImage }}>
            {children}
        </storeContext.Provider>
    )
}