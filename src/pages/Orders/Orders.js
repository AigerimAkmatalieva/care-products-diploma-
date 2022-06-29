import { Link } from "react-router-dom";
import CartDisplay from "../../components/CartDisplay/CartDisplay";
import classes from "./Orders.module.css"


function Cart() {
  return (
    <>
      <CartDisplay actions />
      <Link to="/checkout" className={classes.total}><button>Checkout</button></Link>
    </>
  );
}

export default Cart;
