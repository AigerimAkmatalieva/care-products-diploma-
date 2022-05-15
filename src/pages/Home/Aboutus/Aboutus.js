import React from "react";
import classes from "./Aboutus.module.css";
import cardImages from "../../../assets/about-1.jpg";
import card1Images from "../../../assets/about-2.jpg";

function Menu() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className={classes.card}>
              <img src={cardImages} alt="Card" />
              <img src={card1Images} alt="Card" />
            </div>
          </div>
          <div className="col-5">
            <div className={classes.card}>
              <h1>Welcome to restaurant</h1>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Expedita minima tempore eius voluptatum animi ullam natus
                facilis
              </p>
            <button>Read more</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
