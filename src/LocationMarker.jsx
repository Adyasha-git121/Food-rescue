import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  useMapEvents,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

function LocationMarker({ onLocationSelect }) {
    const redIcon = L.icon({
        iconUrl: './images/Map-Marker-PNG-HD-Image.png',
        iconSize: [24, 32],
        iconAnchor: [16, 32],
        popupAnchor: [0, -32]
      });
  const [position, setPosition] = useState(null);

  useMapEvents({
    click(e) {
      // Set position to the latitude and longitude of the click event
      setPosition(e.latlng);
      console.log("Latitude:", e.latlng.lat, "Longitude:", e.latlng.lng);
      onLocationSelect(e.latlng);
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={redIcon}>
      <Popup>
        Latitude: {position.lat} <br /> Longitude: {position.lng}
      </Popup>
    </Marker>
  );
}

export default LocationMarker;
