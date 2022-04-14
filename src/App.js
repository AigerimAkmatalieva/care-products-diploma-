import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import About from "./pages/About";
import Catalog from "./pages/Catalog";
import Contacts from "./pages/Contacts";
import Delivery from "./pages/Delivery";
import Search from "./pages/Search";
import Signup from "./pages/Signup";
import { Route, Routes } from "react-router-dom";


function App() {
  return (
    <div className="App">
     <Nav />
     <Header />


     <Routes>
       <Route path="/about" element={<About />}/>
       <Route path="/catalog" element={<Catalog />}/>
       <Route path="/contacts" element={<Contacts />}/>
       <Route path="/delivery" element={<Delivery />}/>
       <Route path="/search" element={<Search />}/>
       <Route path="/signup" element={<Signup />}/>
     </Routes>
     <Footer />
    </div>
  );
}

export default App;