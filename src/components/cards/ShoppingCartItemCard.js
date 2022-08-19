import React, { useState } from "react";

export default function ShoppingCartItemCard({
  title,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(price);

  const updateTotalPrice = (itemQuantity, individualPrice) => {
    setTotalPrice(itemQuantity * individualPrice);
    return totalPrice;
  };

  // updateTotalPrice first parameter needs to have +1 or -1 in order to display the correct total
  // without it, it always displays the price of the previous quantity.
  // ex: quantity is 3 price is 400 total is 800

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
    updateTotalPrice(quantity + 1, price);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      updateTotalPrice(quantity - 1, price);
    } else {
      setQuantity(1);
    }
  };

  const inputQuantityManually = (e) => {
    const inputQuantity = e.target.value;
    setQuantity(inputQuantity);
    updateTotalPrice(inputQuantity, price);
  };

  // styles variables

  const imageStyles = {
    height: "120px",
    width: "120px",
  };

  const shoppingCartCardStyles = {
    display: "flex",
    padding: "1rem",
    gap: "1rem",
    alignItems: "center",
    margin: "1rem",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.39)",
  };

  const productInformationContainerStyles = {
    width: "100%",
    textAlign: "center",
  };

  const productQuantityStyles = {
    display: "flex",
    justifyContent: "space-evenly",
  };

  const quantityInputStyles = {
    width: "2rem",
    height: "2rem",
    border: "1px solid black",
    borderRadius: "50%",
    textAlign: "center",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.19)",
  };

  const quantityButtonStyles = {
    backgroundColor: "rgb(107, 74, 107)",
    color: "white",
    border: "2px solid black",
    width: "15%",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.19)",
  };

  return (
    <div className="shoppingCartCard" id={index} style={shoppingCartCardStyles}>
      <div className="imageContainer">
        <img src={imageUrl} alt={imageAlt} style={imageStyles} />
      </div>

      <div
        className="productInformationContainer"
        style={productInformationContainerStyles}
      >
        <div className="productDetails">
          <h2>{title}</h2>
        </div>
        <div className="productCost">
          <div className="productQuantity" style={productQuantityStyles}>
            <button
              onClick={decreaseQuantity}
              className="quantityButton"
              aria-label="decrease-quantity-button"
              style={quantityButtonStyles}
            >
              -
            </button>
            <input
              aria-label="quantity-input"
              type="text"
              value={quantity}
              style={quantityInputStyles}
              onChange={inputQuantityManually}
            />
            <button
              onClick={increaseQuantity}
              className="quantityButton"
              aria-label="increase-quantity-button"
              style={quantityButtonStyles}
            >
              +
            </button>
          </div>

          <div aria-label="total-price">
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
    </div>
  );
}
