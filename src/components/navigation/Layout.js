import React from "react";
import NavBar from "./NavBar";
import "./Layout.component.css";

export default function Layout({ children }) {
  return (
    <>
      <NavBar />
      <main>{children}</main>
    </>
  );
}
