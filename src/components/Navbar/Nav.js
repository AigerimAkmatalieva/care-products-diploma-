import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "./NavItem/NavItem";

function Nav() {
 
  return (
    <nav className="Nav">
      <ul>
        <NavItem url="/">Catalog</NavItem>
        <NavItem url="/">About</NavItem>
        <NavItem url="/">Delivery</NavItem>
      </ul>
      <Logo />
      <ul>
      <NavItem url="/">Contacts</NavItem>
      <NavItem url="/">Search</NavItem>
      <NavItem url="/">Sign up</NavItem>
      </ul>
    </nav>
  );
  
}

export default Nav;