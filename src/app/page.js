import Map from "@/components/Map";
import FindUser from "@/components/FindUser";
import MapVector from "@/components/MapVector";
import ImageOverlayMap from "@/components/ImagesOverlay";
import LayersFeatureGroupMap from "@/components/LayersFeatureGroupMap";
import ToolTipMap from "@/components/ToolTipMap";
import LayersControlMap from "@/components/LayersControlMap";
import DraggableLatLng from "@/components/DraggableLatLng";
import FindLocationMarker from "@/components/FindLocationMarker";
import ViewBounds from "@/components/ViewBounds";
import MiniMap from "@/components/MiniMap";
import { fetchGeocode, fetchReverseGeocode } from "../../api";

const Home = () => {

   fetchGeocode();
   fetchReverseGeocode()
    

  return (
    <>
      <h1>Hi</h1>
      <Map />
      <FindUser />
      <MapVector />
      <ImageOverlayMap />
      <LayersFeatureGroupMap />
      <ToolTipMap />
      <LayersControlMap />
      <DraggableLatLng />
      <FindLocationMarker />
      <ViewBounds />
      <MiniMap />
    </>
  );
};

export default Home;
