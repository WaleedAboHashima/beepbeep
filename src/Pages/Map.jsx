import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from "mapbox-gl/dist/mapbox-gl-csp-worker";
import "mapbox-gl/dist/mapbox-gl.css";
import { useParams } from "react-router-dom";

const Map = () => {
  const params = useParams();
  const [map, setMap] = useState(null);
  const [marker, setMarker] = useState(null);
  mapboxgl.workrClass = MapboxWorker;
  const handleMap = () => {
    mapboxgl.accessToken =
      "pk.eyJ1IjoieGt1c2hpcm94IiwiYSI6ImNsaGdybTJzbzAxZXUzZG82aW9temh2OWsifQ.FZHjpa2RzYkYVQn0EWzzYA";
    const newMap = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v11",
      zoom: 13,
    });

    newMap.on("load", () => {
      newMap.setCenter([params.inlong, params.inlat]);
      if (params) {
        if (params.inlat === params.outlat) {
          const checkInMarker = new mapboxgl.Marker()
            .setLngLat([params.inlong, params.inlat])
            .addTo(newMap)
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<div style="text-align: left"><div style="padding: 1px; border-radius: 5px;">CheckIn : ${params.intime}</div><div style="padding: 1px; border-radius: 5px;">CheckOut : ${params.outtime}</div></div>`
              )
            );
        } else {
          const checkInMarker = new mapboxgl.Marker()
            .setLngLat([params.inlong, params.inlat])
            .addTo(newMap)
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<div style="text-align: left"><div style="padding: 1px; border-radius: 5px;">CheckIn time : ${params.intime}</div>`
              )
            );
          const checkOutMarker = new mapboxgl.Marker()
            .setLngLat([params.outlong, params.outlat])
            .addTo(newMap)
            .setPopup(
              new mapboxgl.Popup().setHTML(
                `<div style="text-align: left"><div style="padding: 1px; border-radius: 5px;">CheckOut time : ${params.outtime}</div>`
              )
            );
        }
      }
    });

    setMap(newMap);

    return () => {
      newMap.remove();
      setMap(null);
      setMarker(null);
    };
  };

  useEffect(() => {
    if (params) {
      handleMap();
    }
  }, []);

  return (
    <>
      <div id="map" style={{ height: "100vh", position: "relative" }}>
        {map && marker && (
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
            }}
          ></div>
        )}
      </div>
    </>
  );
};

export default Map;
