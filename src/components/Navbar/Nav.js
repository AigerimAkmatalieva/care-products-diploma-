import "./Nav.css";

function Nav() {
 
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