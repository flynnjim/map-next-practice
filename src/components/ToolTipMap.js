"use client";

import {
  MapContainer,
  TileLayer,
  Popup,
  CircleMarker,
  Circle,
  Tooltip,
  Rectangle,
  Marker,
  Polygon,
  useMap,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

// useMemo is a React Hook that lets you cache the result of a calculation between re-renders.
//useMemo so not recreated on every render, improving performance
import { useMemo, useState, useEffect } from "react";

// must use only inside MapContainer, so create function outside ToolTipMap
const DisableDoubleClickZoom = () => {
  const map = useMap();

  useEffect(() => {
    map.doubleClickZoom.disable();
  }, [map]);

  return null;
};

const ToolTipMap = () => {
  const center = [51.505, -0.09];


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

  function TooltipCircle() {
    const [clickedCount, setClickedCount] = useState(0);
    const eventHandlers = useMemo(
      () => ({
        click() {
          setClickedCount((count) => count + 1);
        },
      }),
      []
    );

    const clickedText =
      clickedCount === 0
        ? "Hi Team!!!"
        : `Stop clicking on me :'(  ${clickedCount}`;

    return (
      <Circle
        center={center}
        eventHandlers={eventHandlers}
        // left hand side must be name evemtHandlers
        pathOptions={{ fillColor: "blue" }}
        radius={200}
      >
        <Tooltip>{clickedText}</Tooltip>
      </Circle>
    );
  }

  return (
    <>
      <h1>Tooltip - click function area + Disable double click zoom</h1>
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
        <DisableDoubleClickZoom />
        <TooltipCircle />
        <CircleMarker
          center={[51.51, -0.12]}
          pathOptions={{ color: "red" }}
          radius={20}
        >
          <Tooltip>Tooltip for CircleMarker</Tooltip>
        </CircleMarker>
        <Marker position={[51.51, -0.09]}>
          <Popup>Popup for Marker</Popup>
          <Tooltip>Tooltip for Marker</Tooltip>
        </Marker>
        <Polygon pathOptions={{ color: "purple" }} positions={multiPolygon}>
          <Tooltip sticky>sticky Tooltip for Polygon</Tooltip>
        </Polygon>
        <Rectangle bounds={rectangle} pathOptions={{ color: "black" }}>
          <Tooltip direction="bottom" offset={[0, 20]} opacity={1} permanent>
            permanent Tooltip for Rectangle
          </Tooltip>
        </Rectangle>
      </MapContainer>
    </>
  );
};

export default ToolTipMap;
