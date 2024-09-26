"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; 
import "./map.css";
import "leaflet/dist/leaflet.css";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScnbUqXz4bNSCzoSWgEdQFFRCm-U6uB_VL5g&s";

  const customIcon = new L.Icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/8635/8635683.png',
    iconSize: [25, 41],  // Size of the icon
    iconAnchor: [12, 41],  // Point of the icon which will correspond to marker's location
    popupAnchor: [1, -34],  // Point from which the popup should open relative to the iconAnchor
    shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
    shadowSize: [41, 41],  // Size of the shadow
  });

const hiddenGems = [
  [51.49, -0.08, "Location 1", 10, "https://wikipedia.com/"],
  [51.5, -0.06, "Location 2", 5, "https://wikipedia.com/"],
  [51.5, -0.08, "Location 3", 7, "https://wikipedia.com/"],
];

const Map = () => {
  return (
    <>
      <h1>Popup - generate through array</h1>
      <MapContainer
        className="map-container"
        center={[51.505, -0.09]}
        zoom={13}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {hiddenGems.map((gem, index) => {
          const [lat, lng, name, votes, link] = gem;
          return (
            <Marker key={index} position={[lat, lng]} icon={customIcon}>
              <Popup>
                {name}, number of votes {votes}
                <br />
                <a href={link} target="_blank">
                  More info
                </a>
                <img src={imageUrl} className="popup-image" />
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </>
  );
};

export default Map;
