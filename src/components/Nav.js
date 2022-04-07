import "./Nav.css";
import headerImage from "../../assets/search1.svg";

function Nav() {
  const style = {
    backgroundImage: `url(${headerImage})`,
  };


  return (
    <nav className="Nav">
      <ul>
        <li><a href="/">Catalog</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Delivery</a></li>
      </ul>
      <div>Care Products</div>
      <ul>
        <li><a href="/">Contacts</a></li>
        <li><a href="/"></a></li>
        <li><a href="/">Search</a></li>
      </ul>
    </nav>
  );
  
}

export default Nav;