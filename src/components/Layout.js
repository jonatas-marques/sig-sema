import React from "react";

import ResponsiveAppBar from "./ResponsiveAppBar";
import MapComponent from "./MapComponent";
import BottomNav from "./MuiBottomNavigation";

export default function Home() {
  return (
    <>
      <div>
        <ResponsiveAppBar />
      </div>
      <div>
        <MapComponent />
      </div>
      <div>
        <BottomNav />
      </div>
    </>
  );
}
