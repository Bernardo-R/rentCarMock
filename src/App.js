//App.js
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
// import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Crud from "./Components/CrudInventory";
import Admin from "./Components/Admin";
import Inventory from "./Components/Inventory";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/inventory" element={<Crud />} />
          {/* <Route path="/testimonial" element={<Testimonial />} /> */}
          <Route path="/contact" element={<Contact />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin-inventory" element={<Inventory />} />
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
