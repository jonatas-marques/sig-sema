import * as React from "react";
import Box from "@mui/material/Box";
import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import LayersIcon from "@mui/icons-material/Layers";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import { IconButton } from "@mui/material";
import TerrainIcon from '@mui/icons-material/Terrain';
import MapIcon from '@mui/icons-material/Map';

const actions = [
  { icon: <TerrainIcon />, name: "Satélite", url: "https://mt1.google.com/vt/lyrs=y&x={x}&y={y}&z={z}"},
  { icon: <MapIcon />, name: "Mapa", url: "https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}" }
];

export default function ControlledOpenSpeedDial() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Box>
        <SpeedDial
          ariaLabel="SpeedDial controlled open example"
          sx={{ position: "absolute", bottom: 75, left: 16 }}
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
              onClick={handleClose}
            />
          ))}
        </SpeedDial>
      </Box>
    </>
  );
}
