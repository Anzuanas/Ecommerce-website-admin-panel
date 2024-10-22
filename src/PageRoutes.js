import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import Home from "./pages/home/Home";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import User from "./pages/user/User";
import UserList from "./pages/UserList/UserList";
import Product from "./pages/product/Product";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NewProduct from "./pages/newProduct/NewProduct";

export function PageRoutes() {
  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/users" element={<UserList />} />
          <Route path="/user/:userId" element={<User />} />
          <Route path="/newUser" element={<NewUser />} />
          <Route path="/products" element={<ProductList />} />
          <Route path="/product/:productId" element={<Product />} />
          <Route path="/newProduct" element={<NewProduct />} />
        </Routes>
      </div>
    </>
  );
}