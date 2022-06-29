import classes from "./Nav.module.css";
import NavItem from "../Navbar/NavItem/NavItem";
import orders from "../../assets/orders.svg";
import nav from "../../assets/nav.svg";
import auth from "../../assets/contacts.svg";
import { useSelector } from "react-redux";

function Nav() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  const isAuthenticated = useSelector(store => store.auth.idToken !== null);


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
          <NavItem url="/nav">
            <img src={nav} alt="nav" />
          </NavItem>
          <NavItem url="/orders">
            <img src={orders} alt="orders" className="logotip" /><span className={classes.number}>{number}</span>
          </NavItem>
          { isAuthenticated ? <NavItem url="/signout"><img src={auth} alt="auth"/></NavItem> : null }
      { !isAuthenticated ? <NavItem url="/auth"><img src={auth} alt="auth"/></NavItem> : null }
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
