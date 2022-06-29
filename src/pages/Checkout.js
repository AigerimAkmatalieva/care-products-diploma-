import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";

function Checkout() {
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
      <div className="form-check">
        <div className="form-check1">
        <form onSubmit={onCheckout}>
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
        </form>
        </div>
        <div className="form-check2">
          <h4>Form of payment</h4>
          <hr />
          <div>
            <label>
              Select payment
              <br/>
              <input type="radio" name="payment" required />Сash payment
            </label>
          </div>
        </div>
        <h4>Delivery option</h4>
          <hr />
          <div>
            <label>
            Select delivery
              <br/>
              <input type="radio" name="payment" required />Pickup
            </label>
          </div>
        <br />
      </div>
      <button className="checkout" checkout>
          Complete the order
        </button>
    </>
  );
}

export default Checkout;
