'use client'
import React, { useState, useMemo } from "react";
import { MapContainer, TileLayer, Rectangle, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const ViewBounds = () => {
  const innerBounds = [
    [49.505, -2.09],
    [53.505, 2.09],
  ];
  const outerBounds = [
    [50.505, -29.09],
    [52.505, 29.09],
  ];

  const redColor = { color: "red" };
  const whiteColor = { color: "white" };

  function SetBoundsRectangles() {
    const [bounds, setBounds] = useState(outerBounds);
    const map = useMap();

    const innerHandlers = useMemo(
      () => ({
        click() {
          setBounds(innerBounds);
          map.fitBounds(innerBounds);
        },
      }),
      [map]
    );
    const outerHandlers = useMemo(
      () => ({
        click() {
          setBounds(outerBounds);
          map.fitBounds(outerBounds);
        },
      }),
      [map]
    );

    return (
      <>
        <Rectangle
          bounds={outerBounds}
          eventHandlers={outerHandlers}
          pathOptions={bounds === outerBounds ? redColor : whiteColor}
        />
        <Rectangle
          bounds={innerBounds}
          eventHandlers={innerHandlers}
          pathOptions={bounds === innerBounds ? redColor : whiteColor}
        />
      </>
    );
  }

  return (
    <>
      <h1>View bounds - change view</h1>
      <MapContainer
        bounds={outerBounds}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <SetBoundsRectangles />
      </MapContainer>
    </>
  );
};

export default ViewBounds;
