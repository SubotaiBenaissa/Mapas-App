import React from 'react';
import ReactDOM from 'react-dom/client';
import { MapsApp } from './MapsApp';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

if( !navigator.geolocation ) {
  alert("Navegador sin acceso a geolocalización!")
  throw new Error('Navegador sin acceso a geolocalización!')
}

root.render(
  <React.StrictMode>
    <MapsApp />
  </React.StrictMode>
);