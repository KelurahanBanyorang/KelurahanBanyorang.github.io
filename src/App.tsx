import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "./fonts/Poppins/Poppins-Medium.ttf";
import About from "./pages/about/About.page";
import Chart from "./pages/chart/Chart.page";
import Gallery from "./pages/gallery/Gallery.page";
import Home from "./pages/home/Home.page";
import Test from "./pages/test";
import Umkm from "./pages/umkm/Umkm.page";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/umkm" element={<Umkm />} />
        <Route path="/tentang" element={<About />} />
        <Route path="/galeri" element={<Gallery />} />
        <Route path="/bagan-kelurahan" element={<Chart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
