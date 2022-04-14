import "./Header.css";
import header from "../../assets/header.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header})`,
  };
  return (
    <header className="Header" style={style}>
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the <br/> printing and typesetting industry. <br/></p>
    </header>
  );
}
export default Header;