
import CartDisplay from "../components/CartDisplay/CartDisplay";
import OrdersItem from "../components/Orders/OrdersItem";



function Cart() {
  return (
    <>
      <CartDisplay actions />
     <OrdersItem />
    </>
  );
}

export default Cart;
