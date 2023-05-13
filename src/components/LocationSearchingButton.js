import React from "react";
import { Box, IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import styles from "/styles/Map.module.css";

export default function LocationButton(props) {
  return (
    <IconButton onClick={props.event}>
      <MyLocationIcon />
    </IconButton>
  );
}
