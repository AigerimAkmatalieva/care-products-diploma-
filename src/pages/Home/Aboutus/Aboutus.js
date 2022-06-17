import React from "react";
import classes from "./Aboutus.module.css";
import cardImages from "../../../assets/restaranimage.svg";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-7">
            <div className={classes.card}>
              <img src={cardImages} alt="Card" />
            </div>
          </div>
          <div className="col-5">
            <div className={classes.card}>
              <h1>Welcome to restaurant</h1>
              <p>
              The people, food and the prime locations make the perfect place good friends & family to come together and have great time.
              </p>
              <Link to="/menu"><button>View menu</button></Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
