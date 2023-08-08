import { useLoaderData } from "react-router-dom";
import "./OrderReview.css";
import { useState } from "react";
import Cart from "../Cart/Cart";
import CartItem from "../CartItem/CartItem";
import { removeFromDb } from "../../utilities/fakedb";
export default function OrderReview() {
  const { products, previousCart } = useLoaderData();
  console.log(products, previousCart);
  const [cart, setCart] = useState(previousCart);
  const handleRemoveItem = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining); // Update cart state
    removeFromDb(id); // Remove from local storage
  };
  return (
    <div className="shop-container">
      <div className="order-container">
        {cart.map((product) => (
          <CartItem
            key={product.id}
            product={product}
            handleRemoveItem={handleRemoveItem}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cart} />
      </div>
    </div>
  );
}
