import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../data/products";
import { Link, useNavigate } from "react-router-dom";
import { checkout } from "../../redux/cartSlice";
import classes from "./Checkout.module.css";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const items = useSelector((store) => store.cart.items);
  const products = getProducts();

  let total = 0;
  let output = products
    .filter((product) => items[product.productId])
    .map((product) => {
      total += product.price * items[product.productId];

      return (
        <div>
          <Link to="">{product.title}</Link> {items[product.productId]} $
          {product.price * items[product.productId]}
        </div>
      );
    });

  if (!output.length) {
    output = "No items in the cart.";
  }

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }

  return (
    <>
      <form onSubmit={onCheckout} className={classes.form}>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <label>
            Last name:
            <input type="text" name="lastName" required />
          </label>
          <br />
          <label>
            Address:
            <input type="text" name="address" required />
          </label>
          <br />
          <label>
            Phone:
            <input type="text" name="phone" required />
          </label>
          <br />
          <button>Complete the order</button>
        </form>
    </>
  );
}

export default Checkout;
