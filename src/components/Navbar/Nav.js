import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem";
import search from "../../assets/search.svg";
import orders from "../../assets/orders.svg";
import contacts from "../../assets/contacts.svg";
import NavToggle from "./NavToggle/NavToggle";


function Nav() {
 
  return (
    <nav className="Nav">
      <div className="container">
      <ul>
        <NavItem url="/home">Home</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/products"> Products</NavItem>
        <NavItem url="/delivery">Delivery</NavItem>
      </ul>
      <Logo />
      <ul>
      <NavItem url="/search">  <img src={search} alt="search" className="logotip" /></NavItem>
      <NavItem url="/contacts"><img src={contacts} alt="contacts" className="logotip" /></NavItem>
      <NavItem url="/orders"><img src={orders} alt="orders" className="logotip" /></NavItem>
      <NavToggle />
      </ul>
      </div>
    </nav>
  );
  
}

export default Nav;