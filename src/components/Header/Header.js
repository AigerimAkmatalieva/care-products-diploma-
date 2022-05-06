import "./Header.css";
import React from "react";

function Header({ image, title, p, children }) {
  return (
    <header className="Header">
      <div className="container">
      <div className="row">
        <div className="col-7">
          <h1>{title}</h1>
          <p>{children}</p>
          <a href="">
          <button>{p}</button>
          </a>
        </div>
        <div className="col-5">
          <img src={image} alt="img" />
        </div>
      </div>
      </div>
    </header>
  );
}

export default Header;
