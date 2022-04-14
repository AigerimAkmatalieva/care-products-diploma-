import "./Header.css";
import header from "../../assets/header3.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>Get Your Best Cosmetic Products Here</h1>
    </header>
  );
}
export default Header;