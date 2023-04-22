import * as React from "react";
import Box from "@mui/material/Box";
import LayersSwitchButton from "/src/components/LayersSwitchButton.js";
import LocationSearchingButton from "/src/components/LocationSearchingButton.js";

export default function VerticalToolBox() {

  //função para pegar a posição do usuário
  const handleLocationButtonClick = () => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        console.log("User position is: " + lat + " Lat, and "+ lon + " Lon");
      });
    } else {
      console.log("geolocation not available");
    }
  };

  return (
    <div style={{ width: "150px" }}>
      <Box
        sx={{
          position: "absolute",
          top: "70px",
          right: "12px",
          display: "flex",
          alignItems: "flex-start",
          flexDirection: "column",
          p: 1,
          m: 1,
          bgcolor: "background.paper",
          borderRadius: 1,
        }}
      >
        <LayersSwitchButton />
        <LocationSearchingButton event={handleLocationButtonClick} />
      </Box>
    </div>
  );
}
