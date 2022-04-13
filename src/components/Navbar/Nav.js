import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem"


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
      <NavItem url="/search">Search</NavItem>
      <NavItem url="/signup">Sign up</NavItem>
      </ul>
    </nav>
  );
  
}

export default Nav;