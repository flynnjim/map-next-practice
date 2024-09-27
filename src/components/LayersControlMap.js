'use client'

import {
    MapContainer,
    TileLayer,
    Popup,
    Circle,
    Rectangle,
    Marker,
    LayersControl,
    LayerGroup,
    FeatureGroup,
  } from "react-leaflet";
  import L from "leaflet"; 

  import "leaflet/dist/leaflet.css";
  import "./map.css";


  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/8635/8635683.png',
    iconSize: [60, 54],  
    iconAnchor: [12, 41],  
    popupAnchor: [1, -34],  
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41], 
  });
  

  
  const LayersControlMap = () => {
    const center = [51.505, -0.09];
    const rectangle = [
      [51.49, -0.08],
      [51.5, -0.06],
    ];
  
  
    return (
      <>
        <h1>Layers control menu</h1>
        <MapContainer
          center={center}
          zoom={13}
          scrollWheelZoom={false}
          className='map-container'
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <LayersControl position="topright">
            <LayersControl.Overlay name="Marker with popup">
              <Marker position={center} icon={customIcon}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </LayersControl.Overlay>
            <LayersControl.Overlay checked name="Layer group with circles">
              <LayerGroup>
                <Circle
                  center={center}
                  pathOptions={{ fillColor: "blue" }}
                  radius={200}
                />
                <Circle
                  center={center}
                  pathOptions={{ fillColor: "red" }}
                  radius={100}
                  stroke={false}
                />
                <LayerGroup>
                  <Circle
                    center={[51.51, -0.08]}
                    pathOptions={{ color: "green", fillColor: "green" }}
                    radius={100}
                  />
                </LayerGroup>
              </LayerGroup>
            </LayersControl.Overlay>
            <LayersControl.Overlay name="Feature group">
              <FeatureGroup pathOptions={{ color: "purple" }}>
                <Popup>Popup in FeatureGroup</Popup>
                <Circle center={[51.51, -0.06]} radius={200} />
                <Rectangle bounds={rectangle} />
              </FeatureGroup>
            </LayersControl.Overlay>
          </LayersControl>
        </MapContainer>
      </>
    );
  };
  
  export default LayersControlMap;
  