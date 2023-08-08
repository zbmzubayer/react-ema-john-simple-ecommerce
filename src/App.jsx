import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Main from "./layouts/Main";
import Shop from "./components/Shop/Shop";
import Order from "./components/Order/Order";
import OrderReview from "./components/OrderReview/OrderReview";
import { productAndCartLoader } from "./loaders/productAndCartLoader";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main />,
      children: [
        {
          path: "/",
          element: <Shop />,
        },
        {
          path: "orders",
          element: <Order />,
        },
        {
          path: "order-review",
          element: <OrderReview />,
          // loader: async () => fetch("products.json"),
          loader: productAndCartLoader,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
