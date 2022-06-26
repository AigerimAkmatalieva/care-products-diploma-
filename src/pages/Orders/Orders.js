import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./Orders.module.css";

function Cart() {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div className={classes.wrapper}>
          <Link to="">
            <img src={product.image} className={classes.image} />
          </Link>
          <div className={classes.wrapper1}>
            <Link to="" className={classes.title}>
              {product.title}
            </Link>{" "}
            <button
              onClick={() => dispatch(decrement(product.productId))}
              className={classes.decrement}
            >
              -
            </button>
            {items[product.productId]} 
            <button
              onClick={() => dispatch(increment(product.productId))}
              className={classes.increment}
            >
              +
            </button>
            <button
              onClick={() => dispatch(remove(product.productId))}
              className={classes.remove}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  return (
    <>
      <div className={classes.total}>
        {output}
        <hr />
        Total: ${total}
        <br/>
        <Link to="/checkout" className={classes.checkout}><button>Checkout</button></Link>
      </div>
    </>
  );
}

export default Cart;
