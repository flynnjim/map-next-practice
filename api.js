import axios from "axios";
const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const address = 'HR2 6NE'

const SH_LAT = '31.22222'
const SH_LON = '121.45806'

//https://geocode.maps.co/search?q=address&api_key=
const geocoderApi = axios.create({
  baseURL: "https://geocode.maps.co",
});


export const fetchGeocode = () => {
    console.log('HELLO');

    // - /search for convert address to lat lon
    
    return geocoderApi.get('/search', {
        params: {
            q: address,
            api_key: API_KEY,
        },
    }).then(({ data }) => {
        console.log(data);
        
        return data;
    }).catch((error) => {
        console.error("Error fetching geocode data:", error);
    });
};
export const fetchReverseGeocode = () => {
    console.log('Fetching reverse geocode...');
    
    // - /reverse for convert lat lon to address
    return geocoderApi.get('/reverse', {
      params: {
        lat: SH_LAT,
        lon: SH_LON,
        api_key: API_KEY,
      },
    }).then(({ data }) => {
      console.log('Reverse Geocode Data:', data);
      return data;
    }).catch((error) => {
      console.error("Error fetching reverse geocode data:", error);
    });
  };

