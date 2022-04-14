import "./Header.css";
import header from "../../assets/header2.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header})`,
  };

  return (
    <header className="Header" style={style}>
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
    </header>
  );
}
export default Header;