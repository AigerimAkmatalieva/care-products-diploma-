import "./Header.css";
import header from "../../assets/header3.svg";

function Header() {
  const style = {
    backgroundImage: `url(${header3Image})`,
  };

  return (
    <header>
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
      <div> <img src={header} alt="" className="header" /></div>
    </header>
  );
}
export default Header;