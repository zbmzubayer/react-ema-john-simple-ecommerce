/* eslint-disable react/prop-types */
import "./Cart.css";
export default function Cart({ cart, clearCart }) {
  let total = 0;
  let totalShipping = 0;
  cart.map((product) => {
    total += product.price * product.quantity;
    totalShipping += product.shipping;
  });
  const tax = parseFloat((total * 0.1).toFixed(2));
  const grandTotal = total + totalShipping + tax;
  return (
    <div className="cart">
      <p className="cart-title">Order Summary</p>
      <div className="cart-info">
        <p>Selected Items: {cart.length}</p>
        <p>Total Price: ${total} </p>
        <p>Total Shipping Charge: ${totalShipping} </p>
        <p>Tax: ${tax} </p>
        <p className="cart-grand-total">Grand Total: ${grandTotal}</p>
      </div>
      <div className="btn">
        <button onClick={clearCart} className="btn-remove">
          <p>Clear Cart</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M135.2 17.7C140.6 6.8 151.7 0 163.8 0H284.2c12.1 0 23.2 6.8 28.6 17.7L320 32h96c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 96 0 81.7 0 64S14.3 32 32 32h96l7.2-14.3zM32 128H416V448c0 35.3-28.7 64-64 64H96c-35.3 0-64-28.7-64-64V128zm96 64c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16zm96 0c-8.8 0-16 7.2-16 16V432c0 8.8 7.2 16 16 16s16-7.2 16-16V208c0-8.8-7.2-16-16-16z" />
            </svg>
          </p>
        </button>
        <button className="btn-review">
          <p>Review Order</p>
          <p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1em"
              viewBox="0 0 448 512"
            >
              <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
            </svg>
          </p>
        </button>
      </div>
    </div>
  );
}
