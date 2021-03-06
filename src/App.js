import React, { useEffect, useRef } from 'react';
import {JSONData} from './fakeApi';
import MarkerClusterer from '@googlemaps/markerclustererplus';

function App() {
  const mapRef = useRef();
  useEffect(() => {
    const locations = JSONData;

    const map = new window.google.maps.Map(mapRef.current, {
      center: { lat: -23.31509536897005, lng: -46.57099951314262 },
      zoom: 8,
    });
    const markers = locations.map(({name, latitude, longitude}) => {
      return new window.google.maps.Marker({
        position: { lat: latitude, lng: longitude },
        map: map,
        label: name
      });
    });
    const markerCluster = new MarkerClusterer(map, markers,
      {imagePath: "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m"}
     );
      
    return map
  }, []);

  
  return <div id="map" ref={mapRef} style={{ width: 1000, height: 1000 }}></div>;
}

export default App;
