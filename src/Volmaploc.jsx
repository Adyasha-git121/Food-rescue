import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, useMapEvents } from "react-leaflet";
import "leaflet/dist/leaflet.css";

function Volmaploc() {
  function LocationMarker() {
    const [position, setPosition] = useState(null);

    useMapEvents({
      click(e) {
        setPosition(e.latlng);
      },
    });

    return position === null ? null : <Marker position={position}></Marker>;
  }
  return (
    <MapContainer
      center={[20.459815, 85.881194]}
      zoom={13}
      style={{ height: "100vh", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <LocationMarker />
    </MapContainer>
  );
}

export default Volmaploc;
