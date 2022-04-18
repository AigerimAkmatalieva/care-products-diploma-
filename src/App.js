import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/delivery" element={<Delivery />} />
          <Route path="/search" element={<Search />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Layout>

    </div>
  );
}

export default App;
