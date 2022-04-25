import About from "./pages/About";
import Products from "./pages/Products";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Search from "./pages/Search";
import Home from "./pages/Home";
import Orders from "./pages/Orders"
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Product from "./pages/Product";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<Product />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/search" element={<Search />} />
          <Route path="/order" element={<Orders />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
