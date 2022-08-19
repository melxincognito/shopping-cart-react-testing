import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.component.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
export default function NavBar() {
  return (
    <>
      <nav id="nav-bar">
        <h1> MV Studio</h1>
        <ul>
          <li>
            <Link aria-label="home-link" className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link aria-label="shop-link" className="link" to="/Shop">
              Shop
            </Link>
          </li>
          <li className="shopping-cart" id="shopping-cart">
            <ShoppingCartIcon />
          </li>
        </ul>
      </nav>
    </>
  );
}
