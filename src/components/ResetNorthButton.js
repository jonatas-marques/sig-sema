import React from "react";
import { IconButton } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

export default function NorthButton(props) {
  return (
    <IconButton onClick={props.event}>
      <NorthIcon />
    </IconButton>
  );
}
