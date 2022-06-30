import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { decrement, increment, remove } from "../../redux/cartSlice";
import classes from "./CartItem.module.css";

export default function CartItem({ product, actions, quantity }) {
  const dispatch = useDispatch();

  return (
    <>
      <div className={classes.CartItem}>
        <div className={classes.CartItem1}>
          <img
            src={product.image}
            alt={product.title}
            className={classes.image}
          />
           <Link to="" className={classes.title}>
              {product.title}{" "}
            </Link>
            <div className={classes.hero}>${product.price}
          </div>
            
         <span className={classes.span}>
          <div className={classes.quantity}>
            {actions ? (
              <button onClick={() => dispatch(decrement(product.productId))}>
                -
              </button>
            ) : null}
            {quantity}
            {actions ? (
              <button onClick={() => dispatch(increment(product.productId))}>
                +
              </button>
            ) : null}
          </div>
          <div className={classes.subtotal}>
            {actions ? (
              <button onClick={() => dispatch(remove(product.productId))}>
                Delete
              </button>
            ) : null}
          </div>
         </span>
        </div>
      </div>
    </>
  );
}
