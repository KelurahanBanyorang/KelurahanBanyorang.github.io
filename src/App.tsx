import { Button, Stack, Text } from "@mantine/core";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts/Poppins-Medium.ttf";
import Home from "./pages/Home";
import Umkm from "./pages/Umkm";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/umkm" element={<Umkm />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
