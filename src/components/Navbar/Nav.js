import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem";
import search from "../../assets/search1.svg";
import signup from "../../assets/search2.svg";
import orders from "../../assets/search3.svg";


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