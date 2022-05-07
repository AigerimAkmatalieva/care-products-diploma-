import React from "react";
import classes from "./Menu.module.css";

function Menu() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
          <div className={classes.card}>
            <h2>Master Chefs</h2>
            <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita minima tempore eius voluptatum animi ullam natus facilis</p>
          </div>
          </div>
          <div className="col-3">
          <div className={classes.card}>
          <h2>Quality Food</h2>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita minima tempore eius voluptatum animi ullam natus facilis</p>
          </div>
          </div>
          <div className="col-3">
          <div className={classes.card}>
          <h2>Online Order</h2>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita minima tempore eius voluptatum animi ullam natus facilis</p>
          </div>
          </div>
          <div className="col-3">
          <div className={classes.card}>
          <h2>24/7 Services</h2>
          <p> Lorem ipsum dolor sit amet consectetur, adipisicing elit. Expedita minima tempore eius voluptatum animi ullam natus facilis</p>
          </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
