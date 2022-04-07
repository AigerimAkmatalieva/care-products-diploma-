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
        <li><a href="#">Catalog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Delivery</a></li>
      </ul>
      <div>Care Products</div>
      <ul>
        <li><a href="/">Contacts</a></li>
        <li><a href="#">Search</a></li>
        <li><a href="#">Sign up</a></li>
      </ul>
    </nav>
  );
  
}

export default Nav;