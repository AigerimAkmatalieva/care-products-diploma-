import Navbar from "../Navbar/Nav";
import NavToggle from "../Navbar/NavToggle/NavToggle";
import Logo from "../user-interface/Logo";
import classes from "./Toolbar.module.css"


function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>        
        <Navbar />
        <NavToggle callback={toggleDrawer} />
      </div>
    </nav>
  );
}

export default Toolbar; 