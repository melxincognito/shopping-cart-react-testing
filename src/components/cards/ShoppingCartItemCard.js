import React from "react";

import "./ShoppingCartItemCard.component.css";

export default function ShoppingCartItemCard({
  title,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
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
          <button>-</button>
          <input type="text" value={1} />
          <button>+</button>
          <h3>${price.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
}
