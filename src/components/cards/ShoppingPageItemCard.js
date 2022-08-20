import React from "react";
import "./ShoppingPageItemCard.component.css";

export default function ShoppingPageItemCard({
  itemLabel,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
  const itemDetails = {
    label: itemLabel,
    price: price,
    url: imageUrl,
    alt: imageAlt,
    id: index,
  };

  const sendToLocalStorage = () => {
    window.localStorage.setItem(`${imageUrl}`, JSON.stringify(itemDetails));
  };

  return (
    <div className="cardContainer">
      <img aria-label="item photo" src={imageUrl} alt={imageAlt} />
      <h2> {itemLabel}</h2>
      <h3>${price.toFixed(2)}</h3>
      <button
        onClick={sendToLocalStorage}
        aria-label="add to cart button"
        className="addToCartButton"
      >
        {" "}
        Add to cart
      </button>
    </div>
  );
}
