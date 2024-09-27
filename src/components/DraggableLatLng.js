"use client";
import L from "leaflet";
import React, { useState, useRef, useMemo, useCallback } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

const customIcon = new L.Icon({
  iconUrl:
    "https://static-00.iconduck.com/assets.00/chicken-icon-2047x2048-i1f6tb8y.png",
  iconSize: [60, 54], 
  iconAnchor: [12, 41], 
  popupAnchor: [1, -34], 
  shadowUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
  shadowSize: [41, 41], 
});

const DraggableLatLng = () => {
  const center = {
    lat: 51.505,
    lng: -0.09,
  };

  function DraggableMarker() {
    const [draggable, setDraggable] = useState(false);
    const [position, setPosition] = useState(center);
    const markerRef = useRef(null);
    console.log(position);

    const eventHandlers = useMemo(
      () => ({
        dragend() {
          const marker = markerRef.current;
          if (marker != null) {
            setPosition(marker.getLatLng());
          }
        },
      }),
      []
    );
    const toggleDraggable = useCallback(() => {
      setDraggable((d) => !d);
    }, []);

    return (
      <Marker
        draggable={draggable}
        eventHandlers={eventHandlers}
        position={position}
        ref={markerRef}
        icon={customIcon}
      >
        <Popup minWidth={90}>
          <span onClick={toggleDraggable}>
            {draggable
              ? "Drag me!"
              : "Click here to drag me"}
          </span>
        </Popup>
      </Marker>
    );
  }

  return (
    <>
      <h1>LAt Lng Drag</h1>
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
        <DraggableMarker />
      </MapContainer>
    </>
  );
};

export default DraggableLatLng;
