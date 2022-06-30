import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../../redux/cartSlice";
import classes from "./CheckoutItem.module.css"

function CheckoutItem() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    dispatch(
      checkout({
        localId: localId,
        items: items,
        ...Object.fromEntries(formData.entries()),
      })
    );
    navigate("/");
  }

  return (
    <>
    <form onSubmit={onCheckout}>
      <div className={classes.Checkout}>
       <div className={classes.container}>
       <div className={classes.Checkout1}>
          <label>
            First name:
            <input type="text" name="firstName" required />
          </label>
          <br />
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
        </div>
        <div className={classes.Checkout2}>
          <h4>Form of payment</h4>
          <hr />
          <div>
            <label>
              Select payment
              <br/>
              <input type="radio" name="payment" required />Cash payment
            </label>
          </div>
        </div>
        <div className={classes.Checkout2}>
          <h4>Delivery options</h4>
          <hr />
          <div>
            <label>
              Select delivery
              <br/>
              <input type="radio" name="delivery" required />Pickup
              <br/>
              <input type="radio" name="delivery" required />Delivery
            </label>
          </div>
        </div>
       </div>
      </div>
      <button className={classes.checkout} checkout>
          Complete the order
        </button>
        </form>
    </>
  );
}

export default CheckoutItem;
