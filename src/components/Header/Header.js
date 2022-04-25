import "./Header.css";
import headerImage from "../../assets/header.svg"

function Header() { 
  const styles = {
    backgroundImage: `url(${headerImage})`
  }
  return (
      <header className="Header" style={styles} >
          <h1>Capsule Collection</h1>
         </header>
  );
}

export default Header;
