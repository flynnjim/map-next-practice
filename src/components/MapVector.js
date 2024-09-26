"use client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  Circle,
  CircleMarker,
  Polyline,
  Polygon,
  Rectangle,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";
import { useState } from "react";

const MapVector = () => {
  const center = [51.505, -0.09];

  const polyline = [
    [51.505, -0.09],
    [51.51, -0.1],
    [51.51, -0.12],
  ];

  const multiPolyline = [
    [
      [51.5, -0.1],
      [51.5, -0.12],
      [51.52, -0.12],
    ],
    [
      [51.5, -0.05],
      [51.5, -0.06],
      [51.52, -0.06],
    ],
  ];

  const polygon = [
    [51.515, -0.09],
    [51.52, -0.1],
    [51.52, -0.12],
  ];

  const multiPolygon = [
    [
      [51.51, -0.12],
      [51.51, -0.13],
      [51.53, -0.13],
    ],
    [
      [51.51, -0.05],
      [51.51, -0.07],
      [51.53, -0.07],
    ],
  ];

  const rectangle = [
    [51.49, -0.08],
    [51.5, -0.06],
  ];

  const fillBlueOptions = { fillColor: "blue" };
  const blackOptions = { color: "black" };
  const limeOptions = { color: "lime" };
  const purpleOptions = { color: "purple" };
  const redOptions = { color: "red" };

  return (
    <>
      <h1>Map vectors - radius</h1>
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
        <Circle center={center} pathOptions={fillBlueOptions} radius={2000} />
        <CircleMarker
          center={[51.51, -0.12]}
          pathOptions={redOptions}
          radius={50}
        >
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        <Polyline pathOptions={limeOptions} positions={polyline} />
        <Polyline pathOptions={limeOptions} positions={multiPolyline} />
        <Polygon pathOptions={purpleOptions} positions={polygon} />
        <Polygon pathOptions={purpleOptions} positions={multiPolygon} />
        <Rectangle bounds={rectangle} pathOptions={blackOptions} />
      </MapContainer>
    </>
  );
};

export default MapVector;
