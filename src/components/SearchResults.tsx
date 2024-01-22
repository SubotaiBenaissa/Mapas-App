import { useContext } from "react"
import { PlacesContext } from "../context"

export const SearchResults = () => {

    const {} = useContext(PlacesContext)

    return (
        <ul className="list-group mt-3">
            <li className="list-group-item list-group-item-action">
                <h6>Lugar</h6>
                <p 
                    className="text-muted"
                    style={{
                        fontSize: '12px'
                    }}
                >
                    Texto de prueba de los papus
                </p>
                <button className="btn btn-outline-primary btn-sm">
                    Direcciones
                </button>
            </li>
        </ul>
    )

}
