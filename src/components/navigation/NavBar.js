import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.component.css";
import ShoppingCart from "../shopping-cart/ShoppingCart";
export default function NavBar() {
  return (
    <>
      <nav id="nav-bar">
        <div className="logo-container">
          <h1> M.I. Studio</h1>
        </div>

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
        </ul>
        <div aria-label="shopping-cart-link" className="shopping-cart">
          <ShoppingCart aria-label="shopping-cart-link" />
        </div>
      </nav>
    </>
  );
}
