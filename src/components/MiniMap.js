'use client'; // Ensure this is at the top of your file

import React, { useCallback, useMemo, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Rectangle,
  useMap,
  useMapEvent,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";

// Custom hook to manage event listeners
const useEventHandlers = ({ instance, handlers }) => {
  React.useEffect(() => {
    // Attach event handlers
    Object.entries(handlers).forEach(([event, handler]) => {
      instance.on(event, handler);
    });

    // Cleanup function to remove event handlers
    return () => {
      Object.entries(handlers).forEach(([event, handler]) => {
        instance.off(event, handler);
      });
    };
  }, [instance, handlers]);
};

// Define position classes for the minimap control
const POSITION_CLASSES = {
  bottomleft: 'leaflet-bottom leaflet-left',
  bottomright: 'leaflet-bottom leaflet-right',
  topleft: 'leaflet-top leaflet-left',
  topright: 'leaflet-top leaflet-right',
};

// Define bounds style for the rectangle
const BOUNDS_STYLE = { weight: 1 };

// Component for the bounds of the minimap
function MinimapBounds({ parentMap, zoom }) {
  const minimap = useMap();

  // Handle clicks on the minimap
  const onClick = useCallback(
    (e) => {
      parentMap.setView(e.latlng, parentMap.getZoom());
    },
    [parentMap],
  );

  useMapEvent('click', onClick);

  // Track bounds state
  const [bounds, setBounds] = useState(parentMap.getBounds());
  const onChange = useCallback(() => {
    setBounds(parentMap.getBounds());
    minimap.setView(parentMap.getCenter(), zoom);
  }, [minimap, parentMap, zoom]);

  // Event handlers for minimap
  const handlers = useMemo(() => ({ move: onChange, zoom: onChange }), [onChange]);
  useEventHandlers({ instance: parentMap, handlers });

  return <Rectangle bounds={bounds} pathOptions={BOUNDS_STYLE} />;
}

// Component for the minimap control
function MinimapControl({ position, zoom }) {
  const parentMap = useMap();
  const mapZoom = zoom || 0;

  // Memoize the minimap
  const minimap = useMemo(
    () => (
      <MapContainer
        style={{ height: 80, width: 80 }}
        center={parentMap.getCenter()}
        zoom={mapZoom}
        dragging={false}
        doubleClickZoom={false}
        scrollWheelZoom={false}
        attributionControl={false}
        zoomControl={false}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <MinimapBounds parentMap={parentMap} zoom={mapZoom} />
      </MapContainer>
    ),
    [parentMap, mapZoom],
  );

  const positionClass =
    (position && POSITION_CLASSES[position]) || POSITION_CLASSES.topright;

  return (
    <div className={positionClass}>
      <div className="leaflet-control leaflet-bar">{minimap}</div>
    </div>
  );
}

// Main component for the map
function MiniMap() {
  return (
    <MapContainer center={[51.505, -0.09]} zoom={6} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MinimapControl position="topright" />
    </MapContainer>
  );
}

export default MiniMap; // Export the main component
