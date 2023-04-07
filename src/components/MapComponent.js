import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { useEffect, useState } from "react";
import Container from '@mui/material/Container';
import styles from '/styles/Map.module.css'

const defaultCenter = [-46.88576749900006, -23.509130797617008];
const defaultZoom = 13;
const userZoom = 18;

export default function MapComponent({ location }) {
  
  useEffect(() => {
    new Map({
      target: "map",
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
        center: location
          ? [location.longitude, location.latitude]
          : defaultCenter,
        zoom: location
          ? userZoom
          : defaultZoom,
      }),
    });
  }, [location]);

  return (
    <Container maxWidth="false">
      <div id="map" className={styles.mapdiv}></div>
    </Container>
  );
}