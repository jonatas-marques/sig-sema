import React, { useState, useRef, useEffect } from "react";

import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";

import Container from "@mui/material/Container";
import styles from "/styles/Map.module.css";

export default function MapComponent(props) {
  //define parâmetros iniciais para o mapa
  const [map, setMap] = useState();
  const [zoom, setZoom] = useState(14);
  const [center, setCenter] = useState([
    -46.88576749900006, -23.509130797617008,
  ]);

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
      view: new View({
        projection: "EPSG:4326",
        extent: [-180, -90, 180, 90],
        center: center,
        zoom: zoom,
      }),
    });

    //ainda não entendi essa linha do código
    setMap(initialMap);
  }, []);

  return <div ref={mapRef} className={styles.mapdiv}></div>;
}
