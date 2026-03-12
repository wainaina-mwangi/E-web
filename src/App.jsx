import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from './Components/Footer'
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import Checkout from "./pages/Checkout";
import ProductDetails from "./pages/ProductDetails";
import AuthProvider from "./Context/AuthContext";
import { CartProvider } from "./Context/cartContext";



function App() {
  return (
    <div className="app">
      <AuthProvider>
      <CartProvider/>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
      <Footer/>
      <CartProvider/>
    </AuthProvider>
    </div>
  );
}

export default App;
