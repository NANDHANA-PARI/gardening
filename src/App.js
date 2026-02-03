import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";

import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Services from "./pages/Services";
import Contact from "./pages/Contact";



import IndoorPlants from "./pages/Indoorplants";
import OutdoorPlants from "./pages/Outdoorplants";
import HangingPlants from "./pages/Hangingplants";
import Ceramicpots from "./pages/Ceramicpots";
import Plasticpots from "./pages/Plasticpots";
import Woodenpots from "./pages/Woodenpots";
import Fruitseeds from "./pages/Fruitseeds";
import Vegetableseeds from "./pages/vegetableseeds";
import Flowerseeds from "./pages/Flowerseeds";


import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Header />


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />


        <Route path="/plants/indoorplants" element={<IndoorPlants />} />
        <Route path="/plants/outdoorplants" element={<OutdoorPlants />} />
        <Route path="/plants/hangingplants" element={<HangingPlants />} />

        <Route path="/pots/ceramicpots" element={<Ceramicpots />} />
        <Route path="/pots/plasticpots" element={<Plasticpots />} />
        <Route path="/pots/woodenpots" element={<Woodenpots />} />

        <Route path="/seeds/fruitseeds" element={<Fruitseeds />} />
        <Route path="/seeds/vegetableseeds" element={<Vegetableseeds />} />
        <Route path="/seeds/flowerseeds" element={<Flowerseeds />} />
      </Routes>

     
      
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
