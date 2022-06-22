import classes from "./Nav.module.css";
import NavItem from "../Navbar/NavItem/NavItem";
import orders from "../../assets/orders.svg";
import nav from "../../assets/nav.svg";
import contacts from "../../assets/contacts.svg";
import { useSelector } from "react-redux";

function Nav() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });
  return (
    <nav className={classes.Nav}>
      <div className={classes.container}>
        <ul>
          <NavItem url="/home">Home</NavItem>
          <NavItem url="/about">About</NavItem>
          <NavItem url="/products">Menu</NavItem>
          <NavItem url="/service">Service</NavItem>
        </ul>
        <ul>
          <NavItem url="/contacts"> <img src={contacts} alt="contacts"/>
          </NavItem>
          <NavItem url="/nav">
            <img src={nav} alt="nav" />
          </NavItem>
          <NavItem url="/orders">
            <img src={orders} alt="orders" className="logotip" />({number})
          </NavItem>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
