import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Biodiversidade } from "./pages/Biodiversidade"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Bio" element={<Biodiversidade />} />
    </Routes>
  );
}