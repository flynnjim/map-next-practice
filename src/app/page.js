import Map from "@/components/Map";
import FindUser from "@/components/FindUser";
import MapVector from "@/components/MapVector";
import ImageOverlayMap from "@/components/ImagesOverlay";
import LayersFeatureGroupMap from "@/components/LayersFeatureGroupMap";

const Home = () => {
  return (
    <>
      <h1>Hi</h1>
      <Map />
      <FindUser />
      <MapVector />
      <ImageOverlayMap />
      <LayersFeatureGroupMap /> 
    </>
  );
};

export default Home;
