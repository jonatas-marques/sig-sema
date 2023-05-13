//MapComponent.js
import React, { useState, useRef, useEffect } from "react";
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import styles from "/styles/Map.module.css";
import LayersSpeedDial from "/src/components/LayerSwitcher.js";
import LocationSearchingButton from "/src/components/LocationSearchingButton.js";
import ResetNorthButton from "/src/components/ResetNorthButton.js";
import { Box } from "@mui/material";

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
  const [source, setSource] = useState(
    new XYZ({
      url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      crossOrigin: "anonymous",
    })
  );
  const [tileLayer, setTileLayer] = useState(
    new TileLayer({
      source: source,
    })
  );

  //Define uma referência para o mapa
  const mapRef = useRef();

  //Renderiza o mapa
  useEffect(() => {
    const initialMap = new Map({
      target: mapRef.current,
      controls: [],
      layers: [tileLayer],
      view: view,
    });

    setMap(initialMap);
    console.log("Renderizou");
  }, []);

  // função para atualizar o estado do TileLayer com a nova URL
  const handleURLChange = (url) => {
    console.log("URL chegou: " + url);
    setSource(
      new XYZ({
        url: url,
        crossOrigin: "anonymous",
      })
    );
    console.log("Source: " + source);
  };
  useEffect(() => {
    setTileLayer(
      new TileLayer({
        source: source,
      })
    );
    console.log("TileLayer: " + tileLayer);
  }, [source]);

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

  //função para resetar direção, orientar para o norte
  const handleResetNorthButton = () => {
    view.setRotation(0);
  };

  return (
    <>
      <div ref={mapRef} className={styles.mapdiv}></div>
      <div>
        <LayersSpeedDial event={handleURLChange} />
      </div>
      <div>
        <Box className={styles.toolbox}>
          <div>
            <ResetNorthButton event={handleResetNorthButton} />
          </div>
          <div>
            <LocationSearchingButton event={handleLocationButtonClick} />
          </div>
        </Box>
      </div>
    </>
  );
}
