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
      <h3>{price}</h3>
      <button onClick={() => alert(`${itemLabel} `)}> Add to cart</button>
    </div>
  );
}
