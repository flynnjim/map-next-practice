"use client";
import { MapContainer, TileLayer, ImageOverlay } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./map.css";

const position = [51.505, -0.09];
const bounds = [
  [51.49, -0.08],
  [51.5, -0.06],
];
const svgUrl =
  "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/834200da-09dc-4538-8895-cbce75ab1777/dgcxn6m-cbdf0291-db34-4c07-9993-45f149a36081.png/v1/fill/w_894,h_894,q_70,strp/dnd_character_frog_design__1__by_unicornqueen808_dgcxn6m-pre.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MjUwMCIsInBhdGgiOiJcL2ZcLzgzNDIwMGRhLTA5ZGMtNDUzOC04ODk1LWNiY2U3NWFiMTc3N1wvZGdjeG42bS1jYmRmMDI5MS1kYjM0LTRjMDctOTk5My00NWYxNDlhMzYwODEucG5nIiwid2lkdGgiOiI8PTI1MDAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.CU3cCcDS9oQeE5-1mxN3HJT4kFplaEOODnVSMOzJ-m0";

const ImageOverlayMap = () => {
  return (
    <>
      <h1>Image Overlay - scroll wheel allow</h1>
      <MapContainer
        center={position}
        zoom={13}
        scrollWheelZoom={false}
        className="map-container"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <ImageOverlay url={svgUrl} bounds={bounds} />
      </MapContainer>
    </>
  );
};

export default ImageOverlayMap;
