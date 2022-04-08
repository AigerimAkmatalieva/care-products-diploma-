import "./Nav.css";
import navImages from "../../src/assets/search1.svg"
import nav1Images from "../../src/assets/search2.svg"

function Nav() {
  const style1 = {
    backgroundImage: `url(${navImages},)`,
    backgroundRepeat: "no-repeat"
  }
  const style2 = {
    backgroundImage: `url(${nav1Images},)`,
    backgroundRepeat: "no-repeat"
  }
  return (
    <nav className="Nav">
      <ul>
        <li><a href="https://www.google.com/">Catalog</a></li>
        <li><a href="https://www.google.com/">About</a></li>
        <li><a href="https://www.google.com/">Delivery</a></li>
      </ul>
      <div>Care Products</div>
      <ul>
        <li><a href="https://www.google.com/">Contacts</a></li>
        <li><a href="https://www.google.com/">Search</a></li>
        <li><a href="https://www.google.com/">Sign up</a></li>
      </ul>
    </nav>
  );
  
}

export default Nav;