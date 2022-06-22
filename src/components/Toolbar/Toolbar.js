import CartLink from "../CartLink/CartLink";
import Nav from "../Navbar/Nav";
import NavToggle from "../Navbar/NavToggle/NavToggle";
import Logo from "../user-interface/Logo";
import classes from "./Toolbar.module.css";

function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>
        <Logo />
        <Nav />
        <NavToggle callback={toggleDrawer} />
      
      </div>
    </nav>
  );
}

export default Toolbar; 