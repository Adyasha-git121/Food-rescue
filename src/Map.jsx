import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";
import { useLocation } from 'react-router-dom';

function RoutingComponent({ waypoints }) {
  const map = useMap();

  useEffect(() => {
    if (!map || !waypoints) return;
    
    const routingControl = L.Routing.control({
      waypoints: waypoints.map(point => L.latLng(point.lat, point.lng)),
      routeWhileDragging: true,
    }).addTo(map);
    return () => map.removeControl(routingControl); // Clean up on unmount
  }, [map,waypoints]);

  return null;
}

export default function Map() {
  const location = useLocation();
  const { latitude, longitude } = location.state || {};
  const [waypoints, setWaypoints] = useState([
    { lat: latitude||20.444264 , lng: longitude||85.832162  }, // First waypoint from location or default
    { lat: 20.484264, lng: 85.822162 }  // Second static waypoint
  ]);
  useEffect(() => {
    if (latitude && longitude) {
      setWaypoints([
        { lat: latitude, lng: longitude },     // Update first point with dynamic coordinates
        { lat: 20.484264, lng: 85.822162 }     // Second static point
      ]);
    }
  }, [latitude, longitude]); 
  return (
    <div>
      <MapContainer
        className="maparea"
        center={[20.459815, 85.881194]}
        zoom={13}
        scrollWheelZoom={true}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[57.74, 11.94]}>
          <Popup>You are here</Popup>
        </Marker>

        <RoutingComponent waypoints={waypoints}/>
      </MapContainer>
    </div>
  );
}