import "./Header.css";
import headerImage from "../../assets/header.svg";

function Header() {
  const style = {
    backgroundImage: `url(${headerImage})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>Care products</h1>
 
    </header>
  );
}
export default Header;