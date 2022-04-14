import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem";
import search from "../../assets/search.svg";
import orders from "../../assets/Orders.svg";
import signup from "../../pages/Contacts.svg";


function Nav() {
 
  return (
    <nav className="Nav">
      <ul>
        <NavItem url="/catalog">Catalog</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/delivery">Delivery</NavItem>
      </ul>
      <Logo />
      <ul>
      <NavItem url="/contacts">Contacts</NavItem>
      <NavItem url="/search">  <img src={search} alt="" className="logotip" /></NavItem>
      <NavItem url="/orders"><img src={orders} alt="" className="logotip" /></NavItem>
      <NavItem url="/signup"><img src={signup} alt="" className="logotip" /></NavItem>
      </ul>
    </nav>
  );
  
}

export default Nav;