import "./Nav.css";
import Logo from "../user-interface/Logo";
import NavItem from "../Navbar/NavItem/NavItem";
import search from "../../assets/search.svg";
import order from "../../assets/order.svg";
import signup from "../../assets/icons.svg";


function Nav() {
 
  return (
    <nav className="Nav">
      <div className="container">
      <ul>
      <NavItem url="/home">Home</NavItem>
        <NavItem url="/products"> Products</NavItem>
        <NavItem url="/about">About</NavItem>
        <NavItem url="/delivery">Delivery</NavItem>
      </ul>
      <Logo />
      <ul>
      <NavItem url="/search">  <img src={search} alt="" className="logotip" /></NavItem>
      <NavItem url="/orders"><img src={order} alt="" className="logotip" /></NavItem>
      <NavItem url="/signup"><img src={signup} alt="" className="logotip" /></NavItem>
      </ul>
      </div>
    </nav>
  );
  
}

export default Nav;