import React, { useState } from "react";

import "./ShoppingCartItemCard.component.css";

export default function ShoppingCartItemCard({
  title,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    } else {
      setQuantity(1);
    }
  };

  return (
    <div className="shoppingCartCard" id={index}>
      <div className="imageContainer">
        <img src={imageUrl} alt={imageAlt} />
      </div>

      <div className="productInformationContainer">
        <div className="productDetails">
          <h2>{title}</h2>
        </div>
        <div className="productCost">
          <div className="productQuantity">
            <button
              onClick={decreaseQuantity}
              className="quantityButton"
              aria-label="decrease-quantity-button"
            >
              -
            </button>
            <input aria-label="quantity-input" type="text" value={quantity} />
            <button
              onClick={increaseQuantity}
              className="quantityButton"
              aria-label="increase-quantity-button"
            >
              +
            </button>
          </div>

          <h3>${price.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
