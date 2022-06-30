import { Link } from "react-router-dom";
import classes from "./OrdersItem.module.css"


function OrdersItem() {
  return (
    <>
      <Link to="/checkout" className={classes.total}><button>Checkout</button></Link>
    </>
  );
}

export default OrdersItem;
