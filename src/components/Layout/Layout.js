import Nav from "./components/Navbar/Nav";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

function Layout( children ) {
  return ( 
    <main className="Layout">
      <Nav />
      {children}
      <Footer />
    </main>
   );
}

export default Layout;