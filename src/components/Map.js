import React from 'react';
import {useState} from 'react';
import MapGL from 'react-map-gl';


export default function Map() {
  const [viewport, setViewport] = useState({
    latitude: 39.20720968520393,
    longitude: -112.24299576268645,
    zoom: 6.25,
    bearing: 0,
    pitch: 0
  });

  return (
    <MapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/spencernelson144/ck94engu801yy1il64mhbkdy6"
      onViewportChange={nextViewport => setViewport(nextViewport)}
      mapboxApiAccessToken={process.env.MAPBOX_TOKEN}
    />
  );
}