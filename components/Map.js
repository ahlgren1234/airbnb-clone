import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({searchResults}) {

    const coordinates = searchResults.map(result => ({
        longitude: result.long,
        latitude: result.lat
    }));

    const center = getCenter(coordinates);

    const [viewport, setViewport] = useState({
        width: '100%',
        height: '100%',
        latitude: center.latitude,
        longitude: center.longitude,
        zoom: 11,
    });

    return (
        <ReactMapGL
            mapStyle='mapbox://styles/ahlgren1234/cks5rniae8xjq18p62x9j4bop'
            mapboxApiAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
        >
            
        </ReactMapGL>
    )
}

export default Map
