import React, { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import "leaflet-routing-machine";

function RoutingComponent() {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const routingControl = L.Routing.control({
      waypoints: [
        L.latLng(20.449914, 85.902751),
        L.latLng(20.484264, 85.822162)
      ],
      routeWhileDragging: true,
    }).addTo(map);

    return () => map.removeControl(routingControl); // Clean up on unmount
  }, [map]);

  return null;
}

export default function Map() {
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

        <RoutingComponent />
      </MapContainer>
    </div>
  );
}