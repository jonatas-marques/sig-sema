import React from "react";
import { Box, IconButton } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import styles from "/styles/Map.module.css";

export default function LocationButton(props) {
  return (
    <Box className={styles.toolbox}>
      <IconButton onClick={props.event}>
        <MyLocationIcon />
      </IconButton>
    </Box>
  );
}