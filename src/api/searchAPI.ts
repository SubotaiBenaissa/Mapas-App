import axios from 'axios'

const searchAPI = axios.create({
    baseURL: 'https://api.mapbox.com/geocoding/v5/mapbox.places',
    params: {
        limit: 5,
        language: 'es',
        access_token: 'pk.eyJ1IjoiYWxhbmdvYmUiLCJhIjoiY2xyZ2gxeXUzMGczajJpbGw4Nnc5eG04bCJ9.hGA7touCs1mdqrR0K0zlsA'
    }
})

export default searchAPI