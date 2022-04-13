import "./Header.css";
import headerImage from "../../assets/header2.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header2Image})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>Care products</h1>
    </header>
  );
}
export default Header;