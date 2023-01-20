import * as React from 'react';
import { MapContainer, TileLayer } from 'react-leaflet';
import ReactLeafletKml from 'react-leaflet-kml'; // react-leaflet-kml must be loaded AFTER react-leaflet

const kmlText='peta_web.kml';
const parser = new DOMParser();
const kml = parser.parseFromString(kmlText, 'text/xml');

export const ShowMap = () => { 
  return (
      <MapContainer>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ReactLeafletKml kml={kml} />
      </MapContainer>
  );
};