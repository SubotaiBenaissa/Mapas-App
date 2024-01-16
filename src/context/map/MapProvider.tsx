import { Map, Marker, Popup } from "mapbox-gl";
import { MapContext } from "./MapContext";
import { MapReducer } from "./MapReducer";
import { useReducer } from "react";

export interface MapState {
    isMapReady: boolean;
    map?: Map
}

const INITIAL_STATE: MapState = {
    isMapReady: false,
    map: undefined
}

interface Props {
    children: JSX.Element | JSX.Element[]
}

export const MapProvider = ({ children }: Props) => {

    const [state, dispatch] = useReducer(MapReducer, INITIAL_STATE)

    const setMap = (map: Map) => {

        const locationPopup = new Popup()
            .setHTML(`
                <h4>Aquí estoy</h4>
                <p>Será que si estoy ahí?</p>
            `)

        new Marker({
            color: '#61DAFB'
        })
            .setLngLat(map.getCenter())
            .setPopup(locationPopup)
            .addTo(map)
        
        dispatch({ type: 'setMap', payload: map })

    }

    return (
        <MapContext.Provider value={{ ...state, setMap }}>
            { children }
        </MapContext.Provider>
    )
}
