import { ChangeEvent, useContext, useRef } from "react"
import { PlacesContext } from '../context';

export const SearchBar = () => {

    const { searchPlaces } = useContext(PlacesContext)

    const debounceRef = useRef<NodeJS.Timeout>()

    const onQueryChanged = ( event: ChangeEvent<HTMLInputElement> ) => {
        if (debounceRef.current) clearTimeout(debounceRef.current)
        debounceRef.current = setTimeout(() => {
            searchPlaces(event.target.value)
        }, 500)
    }

    return (
        <div className="search-container">
            <input 
                type="text" 
                className="form-control"
                placeholder="Buscar lugar..."
                onChange={ onQueryChanged }
            />
        </div>
    )

}
