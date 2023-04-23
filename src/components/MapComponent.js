import React, { useState, useRef, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import styles from "/styles/Map.module.css";
import { Box } from "@mui/material";
import LayersSpeedDial from "/src/components/LayersSpeedDial.js";
import LayersSwitchButton from "/src/components/LayersSwitchButton.js";
import LocationSearchingButton from "/src/components/LocationSearchingButton.js";
import DataManagement from "/src/components/DataManagement.js";

export default function MapComponent() {
  //define parâmetros iniciais para o mapa
  const [map, setMap] = useState();
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState([
    -46.88576749900006, -23.509130797617008,
  ]);
  const [view, setView] = useState(
    new View({
      projection: "EPSG:4326",
      extent: [-180, -90, 180, 90],
      center: center,
      zoom: zoom,
    })
  );

  //pega a referência para o mapa, mas por quê?
  const mapRef = useRef();

  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current, //por que utilizar useRef aqui?
      controls: [],
      layers: [
        new TileLayer({
          source: new XYZ({
            url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
            crossOrigin: "anonymous",
          }),
        }),
      ],
      view: view,
    });

    //ainda não entendi essa linha do código
    setMap(initialMap);
  }, []);

  //função para pegar a posição do usuário
  const handleLocationButtonClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        view.animate({
          center: [lon, lat],
          zoom: 20,
          duration: 1568,
        });
      });
    } else {
      console.log("geolocation not available");
    }
  };

  return (
    <>
      <div ref={mapRef} className={styles.mapdiv}></div>
      <div>
            <LayersSpeedDial />
          </div>
      <div>
        <Box className={styles.toolbox}>
          <div>
            <LocationSearchingButton event={handleLocationButtonClick} />
          </div>
        </Box>
      </div>
    </>
  );
}
