import classes from "./Nav.module.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem";
import orders from "../../assets/orders.svg";
import nav from "../../assets/nav.svg";
import contacts from "../../assets/contacts.svg";
import NavToggle from "./NavToggle/NavToggle";

function Nav() {
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
        <NavToggle />
        <Logo className="Logo"/>
        <ul>
          <NavItem url="/home">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/products">Menu</NavItem>
          <NavItem url="/service">Service</NavItem>
        </ul>
        <ul>
          <NavItem url="/contacts"> <img src={contacts} alt="contacts" className="logotip" />
          </NavItem>
          <NavItem url="/nav">
            <img src={nav} alt="nav" className="logotip" />
          </NavItem>
          <NavItem url="/orders">
            <img src={orders} alt="orders" className="logotip" />
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
