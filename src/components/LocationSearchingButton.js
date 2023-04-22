import React from "react";
import { IconButton } from "@mui/material";
import LocationSearchingIcon from "@mui/icons-material/LocationSearching";

export default function LocationButton(props) {
  return (
    <IconButton onClick={props.event}>
      <LocationSearchingIcon />
    </IconButton>
  );
}
