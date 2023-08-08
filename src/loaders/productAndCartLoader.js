import { getShoppingCart } from "../utilities/fakedb";

export const productAndCartLoader = async () => {
  // get products
  const productsData = await fetch("products.json");
  const products = await productsData.json();
  // get cart
  const savedCart = getShoppingCart();
  const previousCart = [];
  console.log(savedCart);
  for (const id in savedCart) {
    const addedProduct = products.find((product) => product.id === id);
    if (addedProduct) {
      addedProduct.quantity = savedCart[id];
      previousCart.push(addedProduct);
    }
  }
  return { products, previousCart };
};
