import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCart } from "./store/slices/cartSlice";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import TermsAndConditions from "./pages/TermsAndConditions";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import ShippingPolicy from "./pages/ShippingPolicy";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Shopping from "./pages/Shopping";
import ProductDetail from "./pages/ProductDetail";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Checkout from "./pages/Checkout";
import ScrollLink from "./components/ScrollLink";

import AddProduct from "./pages/admin/AddProduct";
import AdminDashboard from "./pages/AdminDashboard";
import AdminRoute from "./routes/AdminRoute";
import ViewProduct from "./pages/admin/ViewProduct";
import AdminUsers from "./pages/admin/AdminUsers";
import CartDrawer from "./components/CartDrawer";
import Checkout1 from "./pages/Checkout1";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    // Initialize cart on app load
    dispatch(fetchCart());
  }, [dispatch]);

  return (
    <Router>
      <Navbar />
      <ScrollLink />
      <CartDrawer />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/terms" element={<TermsAndConditions />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/refund" element={<RefundPolicy />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/shop" element={<Shopping />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/checkout-1" element={<Checkout1 />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <AdminDashboard />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/add-product"
          element={
            <AdminRoute>
              <AddProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/products"
          element={
            <AdminRoute>
              <ViewProduct />
            </AdminRoute>
          }
        />
        <Route
          path="/admin/users"
          element={
            <AdminRoute>
              <AdminUsers />
            </AdminRoute>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
