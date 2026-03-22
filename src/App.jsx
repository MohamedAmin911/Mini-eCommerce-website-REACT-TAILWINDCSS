import { Route, Routes } from "react-router-dom";
import ProductPage from "./pages/product-page/ProductPage";
import ProductsPage from "./pages/products-page/ProductsPage";
import CartPage from "./pages/cart-page/cart-page";
import RegisterPage from "./pages/register-page/RegisterPage";
import ProtectedRoute from "./components/ProtectedRoute";
import ContactPage from "./pages/contact-page/ContactPage";

function App() {
  return (
    <Routes>
          

      <Route path="/" element={<RegisterPage />} />
      <Route path="/products" element={<ProtectedRoute><ProductsPage /></ProtectedRoute>} />
      <Route path="/products/:product" element={<ProductPage />} />
      <Route path="/products/cart" element={<CartPage />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="*" element={<h1>NOT FOUND</h1>} />
    </Routes>
  );
}

export default App;
