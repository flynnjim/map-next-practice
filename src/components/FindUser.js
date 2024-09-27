"use client"
import L from "leaflet"; 
import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    useMapEvents,
  } from "react-leaflet";
  import "leaflet/dist/leaflet.css";
  import "./map.css";
  import { useState } from "react";
  // map at your location and gets thelat and long

  const customIcon = new L.Icon({
    iconUrl: 'https://static.thenounproject.com/png/4415238-200.png',
    iconSize: [60, 54],  
    iconAnchor: [12, 41],  
    popupAnchor: [1, -34], 
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],  
  });
  
  const FindUser = () => {
    function LocationMarker() {
      const [position, setPosition] = useState(null);
      const [latLong, setLatLong] = useState({ lat: null, lng: null });
  
      const map = useMapEvents({
        click() {
          map.locate();
        },
        locationfound(e) {
          setPosition(e.latlng);
          setLatLong({ lat: e.latlng.lat, lng: e.latlng.lng });
          map.flyTo(e.latlng, map.getZoom());
        },
      });
  
      return position === null ? null : (
        <>
          <Marker position={position} icon={customIcon}>
            <Popup>
              You are here
              <div className="coordinates-display">
                <p>Latitude: {latLong.lat}</p>
                <p>Longitude: {latLong.lng}</p>
              </div>
            </Popup>
          </Marker>
        </>
      );
    }
  
    return (
      <>
          <h1>find user location popup</h1>
        <MapContainer
          center={[51.505, -0.09]}
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
  
  export default FindUser;
  