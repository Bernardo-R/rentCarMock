import AdminInventory from "./Components/AdminInventory";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Inventory from "./Components/Inventory";
import Admin from "./Components/Admin";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Inventory />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-inventory" element={<AdminInventory />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
