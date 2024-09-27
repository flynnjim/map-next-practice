'use client'
import L from "leaflet"; 
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './map.css';

const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/119/119702.png',
    iconSize: [60, 54],  
    iconAnchor: [12, 41],  
    popupAnchor: [1, -34], 
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],  
  });

const LocationMarker = () => {
  const [position, setPosition] = useState(null);

  // useMapEvents handles map click events
  useMapEvents({
    click(e) {
      console.log(position);
      
      setPosition(e.latlng)
    },
  });

  return position === null ? null : (
    <Marker position={position} icon={customIcon}>
      <Popup>You already clicked here!</Popup>
    </Marker>
  );
};

const FindLocationMarker = () => {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  return (
    <>
      <h1>Click to Place Marker</h1>
      <MapContainer
        center={center}
        zoom={13}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <LocationMarker />
      </MapContainer>
    </>
  );
};

export default FindLocationMarker;
