import Footer from "../Footer/Footer";
import Drawer from "../Drawer/Drawer";
import Toolbar from "../Toolbar/Toolbar";

function Layout({ children }) {
  return (
    <main className="Layout">
      <Toolbar />
      <Drawer />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
}

export default Layout;
