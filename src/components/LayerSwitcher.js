//LayersSpeedDial.js
import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import LayersIcon from "@mui/icons-material/Layers";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TerrainIcon from "@mui/icons-material/Terrain";
import MapIcon from "@mui/icons-material/Map";
import styles from "/styles/Map.module.css";

const actions = [
  {
    icon: <TerrainIcon />,
    name: "Satélite",
    url: "https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
  },
  {
    icon: <MapIcon />,
    name: "Mapa",
    url: "http://mt0.google.com/vt/lyrs=m&hl=en&x={x}&y={y}&z={z}",
  },
];

export default function ControlledOpenSpeedDial(props) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  
  //Passar o url selecionado para o MapComponent.js
  const handleUrl = (url) => props.event(url);

  return (
    <>
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          className={styles.layersdial}
          icon={<LayersIcon />}
          onClose={handleClose}
          onOpen={handleOpen}
          open={open}
          direction="right"
        >
          {actions.map((action) => (
            <SpeedDialAction
              key={action.name}
              icon={action.icon}
              tooltipTitle={action.name}
              onClick={() => handleUrl(action.url)}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
