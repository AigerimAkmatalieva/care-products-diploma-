import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Search from "./pages/Search";
import Orders from "./pages/Orders"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";
import Products from "./pages/Products";
import Home from "./pages/Home"

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
           <Route path="/" element={<Home />}  />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/service" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/nav" element={<Search />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
