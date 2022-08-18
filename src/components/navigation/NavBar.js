import React from "react";
import { Link, Router } from "react-router-dom";
import "./NavBar.component.css";
export default function NavBar() {
  return (
    <>
      <nav id="nav-bar">
        <ul>
          <li>
            <Link className="link" to="/">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" to="/Shop">
              Shop
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
