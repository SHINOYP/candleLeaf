import "./index.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { logIn } from "./features/auth/authSlice";
import { AdminDashboard } from "./pages/Admin/AdminDashboard";
import AdminRoute from "./Routes/AdminRoute";
import CreateProduct from "./pages/Admin/CreateProduct";
import Products from "./pages/Admin/Products";
import UpdateProduct from "./pages/Admin/UpdateProduct";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const data = localStorage.getItem("auth");
    const parsedObject = JSON.parse(data);
    if (data) {
      dispatch(logIn(parsedObject));
    }
  }, []);
  return (
    <div className="App  ">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="/dashboard" element={<AdminRoute />}>
          <Route path="admin/create-category" element={<AdminDashboard />} />
          <Route path="admin/create-product" element={<CreateProduct />} />
          <Route path="admin/products" element={<Products />} />
          <Route path="admin/product/:id" element={<UpdateProduct />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
