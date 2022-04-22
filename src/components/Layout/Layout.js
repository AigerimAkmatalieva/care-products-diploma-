import Nav from "../Navbar/Nav";
import Footer from "../Footer/Footer";
import Home from "../../pages/Home";

function Layout({ children }) {
  return (
    <main className="Layout">
      <Nav />
      <Home />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
