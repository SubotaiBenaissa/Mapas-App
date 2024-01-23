import axios from 'axios'

const directionAPI = axios.create({
    baseURL: 'https://api.mapbox.com/directions/v5/mapbox/driving',
    params: {
        alternatives: false,
        geometries: 'geojson',
        overview: 'simplified',
        steps: false,
        access_token: 'pk.eyJ1IjoiYWxhbmdvYmUiLCJhIjoiY2xyZ2gxeXUzMGczajJpbGw4Nnc5eG04bCJ9.hGA7touCs1mdqrR0K0zlsA'
    }
})

export default directionAPI