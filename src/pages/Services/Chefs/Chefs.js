import React from "react";
import classes from "./Chefs.module.css";

import servicesImage from "../../../assets/services.jpg";
import services1Image from "../../../assets/services1.jpg";
import services2Image from "../../../assets/services2.jpg";
import services3Image from "../../../assets/services3.jpg";

function Menu() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className={classes.card}>
              <img
                src={servicesImage}
                alt="breakfast"
                className={classes.img}
              />
              <h1>Mark</h1>
            </div>
          </div>
          <div className="col-3">
            <div className={classes.card}>
              <img
                src={services1Image}
                alt="breakfast"
                className={classes.img}
              />
              <h1>Elon</h1>
            </div>
          </div>
          <div className="col-3">
            <div className={classes.card}>
              <img
                src={services2Image}
                alt="breakfast"
                className={classes.img}
              />
              <h1>Jan</h1>
            </div>
          </div>
          <div className="col-3">
            <div className={classes.card}>
              <img
                src={services3Image}
                alt="breakfast"
                className={classes.img}
              />
              <h1>Andrew</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Menu;
