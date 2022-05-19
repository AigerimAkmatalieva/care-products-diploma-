import React from "react";
import classes from "./Chefs.module.css";


function Menu() {
  return (
    <>
     <main className={classes.pagecontent}>
  <div className={classes.card}>
    <div className={classes.content}>
      <h2 className={classes.title}>John Priestley</h2>
      <p className={classes.copy}>Plan your next beach trip with these fabulous destinations</p>
    </div>
  </div>
  <div className={classes.card}>
    <div className={classes.content}>
      <h2 className={classes.title}>Mark Elon</h2>
      <p className={classes.copy}>Plan your next beach trip with these fabulous destinations</p>
    </div>
  </div>
  <div className={classes.card}>
    <div className={classes.content}>
      <h2 className={classes.title}>Tahir Gordon</h2>
      <p className={classes.copy}>It's the desert you've always dreamed of</p>
    </div>
  </div>
  <div className={classes.card}>
    <div className={classes.content}>
      <h2 className={classes.title}>Evgenie Zubov</h2>
      <p className={classes.copy}>Seriously, straight up, just blast off into outer space today</p>
    </div>
  </div>
</main>
    </>
  );
}

export default Menu;
