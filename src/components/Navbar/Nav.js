import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem"
import logo from "../../assets/search1.svg"


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
      <NavItem url="/search">  <img src={logo} alt="" className="logotip" /></NavItem>
      <NavItem url="/signup">Sign up</NavItem>
      </ul>
    </nav>
  );
  
}

export default Nav;