import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";
export default function Header() {
  return (
    <nav className="header">
      <img src={logo} alt="Ema john logo" />
      <ul>
        <li>
          <Link to="/orders">Order</Link>
        </li>
        <li>
          <Link to="/order-review">Order Review</Link>
        </li>
        <li>
          <Link to="/manage-inventory">Manage Inventory</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  );
}
