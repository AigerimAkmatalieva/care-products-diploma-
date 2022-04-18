import Nav from "./components/Navbar/Nav";
import Footer from "./components/Footer/Footer";

function Layout(children) {
  return (
    <main className="Layout">
      <Nav />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
