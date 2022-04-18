import "./Header.css";
import header from "../../assets/header.svg";

function Header({ image, title, children }) {
  const style = {
    backgroundImage: `url(${header})`,
  };
  return (
    <header className="Header container" style={style}>
      <h1>Get Your Best Cosmetic Products Here</h1>
      <p>
        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting
        industry. <br />
      </p>
      <header className="Header">
        <img src={image} />
        <section>
          <h1>{title}</h1>
          <p>{children}</p>
        </section>
      </header>
    </header>
  );
}
export default Header;
