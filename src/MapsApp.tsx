import { PlacesProvider } from './context'
import { HomeScreen } from './screens/HomeScreen';

export const MapsApp = () => {

    return (
        <PlacesProvider>
            <HomeScreen />
        </PlacesProvider>
    )

}
