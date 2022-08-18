import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage";
import ShoppingPage from "./pages/ShoppingPage";
import Layout from "./components/navigation/Layout";

export default function App() {
  return (
    <div className="App">
      <Layout>
        <Routes>
          {" "}
          <Route path="/" element={<HomePage />} />
          <Route path="/shop" element={<ShoppingPage />} />
        </Routes>
      </Layout>
    </div>
  );
}
