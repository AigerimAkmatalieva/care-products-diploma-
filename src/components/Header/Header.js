import "./Header.css";
import header from "../../assets/header3.svg";

function Header() {
  return (
    <header className="Header">
     <div>
     <h1>Get Your Best Cosmetic Products Here</h1>
      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy</p>
     </div>
      <div> <img src={header} alt="" className="header" /></div>
    </header>
  );
}
export default Header;