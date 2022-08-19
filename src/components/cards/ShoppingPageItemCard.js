import React from "react";
import "./ShoppingPageItemCard.component.css";

export default function ShoppingPageItemCard({
  itemLabel,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
  return (
    <div className="cardContainer">
      <img src={imageUrl} alt={imageAlt} />
      <h2> {itemLabel}</h2>
      <h3>${price.toFixed(2)}</h3>
      <button onClick={() => alert(`${itemLabel}`)}> Add to cart</button>
    </div>
  );
}
