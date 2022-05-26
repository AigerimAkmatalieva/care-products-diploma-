import Navbar from "../Navbar/Nav";
import classes from "./Toolbar.module.css"


function Toolbar({ toggleDrawer }) {
  return (
    <nav className={classes.Toolbar}>
      <div className={classes.container}>        
        <Navbar />
      </div>
    </nav>
  );
}

export default Toolbar; 