import { PlacesProvider } from './context'
import { HomeScreen } from './screens/HomeScreen';
import './styles.css'

export const MapsApp = () => {

    return (
        <PlacesProvider>
            <HomeScreen />
        </PlacesProvider>
    )

}
