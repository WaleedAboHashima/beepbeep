import React, { useEffect, useState } from "react";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapboxWorker from 'mapbox-gl/dist/mapbox-gl-csp-worker';
import "mapbox-gl/dist/mapbox-gl.css";
import { useDispatch, useSelector } from "react-redux";
import { GetAllLocations } from "../apis/Map/GetAllLocations";
import { Backdrop, CircularProgress } from "@mui/material";

const Main = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.Location);
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
      newMap.setCenter([
        state.data.locations[0].long,
        state.data.locations[0].lat,
      ]);
      state.data.locations.map((location) => {
        const newMarker = new mapboxgl.Marker()
          .setLngLat([location.long, location.lat])
          .addTo(newMap)
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<div style="text-align: left"><div style="padding: 1px; border-radius: 5px;">Captain : ${location.user.captin_fullname}</div><div style="padding: 1px; border-radius: 5px;">Phone : ${location.user.phone}</div></div>`
            )
          );
      });
    });

    setMap(newMap);

    return () => {
      newMap.remove();
      setMap(null);
      setMarker(null);
    };
  };

  useEffect(() => {
    if (state.data.locations) {
      handleMap();
    } else {
      dispatch(GetAllLocations());
    }
  }, [state.data.locations]);

  return (
    <>
      {state.loading ? (
        <Backdrop sx={{ color: "#fff" }} open={state.loading}>
          <CircularProgress color="inherit" />
        </Backdrop>
      ) : (
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
      )}
    </>
  );
};

export default Main;
