import { useState, useEffect } from "react";
import "./Shop.css";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import {
  addToDb,
  deleteShoppingCart,
  getShoppingCart,
} from "../../utilities/fakedb";

export default function Shop() {
  const [products, setProducts] = useState([]);
  const [cartProducts, setCartProducts] = useState([]);
  console.log("rerender");
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);
  useEffect(() => {
    const storedCart = getShoppingCart();
    let savedCart = [];
    for (const id in storedCart) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        savedCart.push(addedProduct);
      }
    }
    setCartProducts(savedCart);
  }, [products]);
  const handleAddToCart = (selectedProduct) => {
    // cartProducts.push(product); will not work
    let newCartProducts = [];
    const isExist = cartProducts.find(
      (product) => product.id === selectedProduct.id
    );
    if (!isExist) {
      selectedProduct.quantity = 1;
      newCartProducts = [...cartProducts, selectedProduct];
    } else {
      const restProducts = cartProducts.filter(
        (product) => product.id !== selectedProduct.id
      );
      isExist.quantity += 1;
      newCartProducts = [...restProducts, isExist];
    }
    // save to local storage
    addToDb(selectedProduct.id);
    setCartProducts(newCartProducts);
  };

  const clearCart = () => {
    setCartProducts([]);
    deleteShoppingCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="cart-container">
        <Cart cart={cartProducts} clearCart={clearCart} />
      </div>
    </div>
  );
}
