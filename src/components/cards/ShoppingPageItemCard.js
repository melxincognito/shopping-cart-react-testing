import React from "react";
import "./ShoppingPageItemCard.component.css";

export default function ShoppingPageItemCard({
  itemLabel,
  price,
  imageUrl,
  imageAlt,
}) {
  return (
    <div className="cardContainer">
      <img src={imageUrl} alt={imageAlt} />
      <h2> {itemLabel}</h2>
      <h3>${price.toFixed(2)}</h3>
      <button
        onClick={() => alert(`${itemLabel}`)}
        aria-label="add to cart button"
      >
        {" "}
        Add to cart
      </button>
    </div>
  );
}
