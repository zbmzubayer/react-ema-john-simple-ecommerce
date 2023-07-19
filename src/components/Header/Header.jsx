import logo from "../../images/Logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Ema john logo" />
      <ul>
        <li>
          <a href="/order">Order</a>
        </li>
        <li>
          <a href="/order-review">Order Review</a>
        </li>
        <li>
          <a href="/manage-inventory">Manage Inventory</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
      </ul>
    </nav>
  );
}
