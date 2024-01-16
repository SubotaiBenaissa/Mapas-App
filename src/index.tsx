import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';
import mapboxgl from 'mapbox-gl';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
 
mapboxgl.accessToken = 'pk.eyJ1IjoiYWxhbmdvYmUiLCJhIjoiY2xyZ2gxeXUzMGczajJpbGw4Nnc5eG04bCJ9.hGA7touCs1mdqrR0K0zlsA';

if( !navigator.geolocation ) {
  alert("Navegador sin acceso a geolocalización!")
  throw new Error('Navegador sin acceso a geolocalización!')
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);