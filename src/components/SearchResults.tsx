import { useContext, useState } from "react"
import { MapContext, PlacesContext } from "../context"
import { LoadingPlaces } from "./LoadingPlaces"
import { Feature } from "../interfaces/places"

export const SearchResults = () => {

    const [activeId, setActiveId] = useState('')
    const { places, isLoadingPlaces } = useContext(PlacesContext)
    const { map } = useContext(MapContext)

    const onPlaceClicked = ( place: Feature ) => {

        const [ lng, lat ] = place.center;
        setActiveId( place.id )

        map?.flyTo({
            zoom: 14,
            center: [ lng, lat ]
        })
    }

    if( isLoadingPlaces ) {
        return <LoadingPlaces />
    }

    if( places.length === 0 ) {
        return <></>
    }

    return (
        <ul className="list-group mt-3">
        {
            places.map(place =>(  
                <li 
                    key={ place.id } 
                    className={`list-group-item list-group-item-action pointer ${( activeId === place.id ) ? 'active' : '' } `}
                    onClick={ () => onPlaceClicked(place) }
                >
                    <h6>{ place.text_es }</h6>
                    <p 
                        style={{
                            fontSize: '12px'
                        }}
                    >
                        {place.place_name}
                    </p>
                    <button className={`btn ${ activeId === place.id ? 'btn-outline-light' : 'btn-outline-primary' } btn-sm`}>
                        Direcciones
                    </button>
                </li>
            ))
        }
        </ul>
    )

}
