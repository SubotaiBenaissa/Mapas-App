import { useEffect, useReducer } from "react";
import { PlacesContext } from "./PlacesContext";
import { PlacesReducer } from "./PlacesReducer";
import { getUserLocation } from "../../helpers";
import { searchAPI } from "../../api";
import { Feature, PlacesResponse } from "../../interfaces/places";

export interface PlacesState {
    isLoading: boolean;
    userLocation?: [number, number],
    isLoadingPlaces: boolean,
    places: Feature[]
}

const INITIAL_STATE: PlacesState = {
    isLoading: true,
    userLocation: undefined,
    isLoadingPlaces: false,
    places: []
}

interface Props {
  children: JSX.Element | JSX.Element[]
}

export const PlacesProvider = ({ children }: Props) => {

  const [state, dispatch] = useReducer( PlacesReducer, INITIAL_STATE )

  useEffect(() => {
    
    getUserLocation().then( lngLat => dispatch({ type: 'setUserLocation', payload: lngLat }) )

  }, [])

  const searchPlaces = async( query: string ): Promise<Feature[]> => {

    if ( query.length === 0 ) {
      dispatch({ type: 'setPlaces', payload: [] })
      return []
    }
    if( !state.userLocation ) throw new Error('No hay ubicación de usuario')

    const resp = await searchAPI.get<PlacesResponse>(`/${ query }.json`, {
      params: {
        proximity: state.userLocation.join(',')
      }
    })

    dispatch({ type: 'setPlaces', payload: resp.data.features })
    return resp.data.features

  }

  return (
    <PlacesContext.Provider value = {{
        ...state,
        searchPlaces
    }}>
      { children }
    </PlacesContext.Provider>
  )
}
