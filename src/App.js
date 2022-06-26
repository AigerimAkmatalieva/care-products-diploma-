import About from "./pages/About/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Services/Delivery";
import Search from "./pages/Search";
import Orders from "./pages/Orders/Orders"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Home from "./pages/Home/Home"
import Categories from "./pages/Categories";
import Category from "./pages/Category";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import Checkout from "./pages/Checkout/Checkout";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch({ type: 'cart/restore' });
  }, []);

  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}  />
          <Route path="/home" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categories/:categoryId" element={<Category/>} />
          <Route path="/service" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/nav" element={<Search />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
