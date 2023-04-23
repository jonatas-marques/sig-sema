import React from "react";
import { IconButton } from "@mui/material";
import MyLocationIcon from '@mui/icons-material/MyLocation';

export default function LocationButton(props) {
  return (
    <IconButton onClick={props.event}>
      <MyLocationIcon  />
    </IconButton>
  );
}
