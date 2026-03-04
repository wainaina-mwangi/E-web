import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
      </Routes>
      <Footer/>
    
    </div>
  );
}

export default App;
