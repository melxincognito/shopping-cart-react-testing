import React, { useState } from "react";
import DeleteIcon from "@mui/icons-material/Delete";

export default function ShoppingCartItemCard({
  title,
  price,
  imageUrl,
  imageAlt,
  index,
}) {
  const [quantity, setQuantity] = useState(1);

  const [totalPrice, setTotalPrice] = useState(price);

  // setting hover color for increase and decrease buttons
  const [isSelectingIncrease, setIsSelectingIncrease] = useState(false);
  const [isSelectingDecrease, setIsSelectingDecrease] = useState(false);
  const [isSelectingDelete, setIsSelectingDelete] = useState(false);

  const handleMouseEnterIncrease = () => {
    setIsSelectingIncrease(true);
  };
  const handleMouseLeaveIncrease = () => {
    setIsSelectingIncrease(false);
  };
  const handleMouseEnterDecrease = () => {
    setIsSelectingDecrease(true);
  };
  const handleMouseLeaveDecrease = () => {
    setIsSelectingDecrease(false);
  };
  const handleMouseEnterDelete = () => {
    setIsSelectingDelete(true);
  };
  const handleMouseLeaveDelete = () => {
    setIsSelectingDelete(false);
  };

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

  const deleteItem = () => {
    window.localStorage.removeItem(`${imageUrl}`);
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
    backgroundColor: "white",
  };

  const productInformationContainerStyles = {
    width: "100%",
    textAlign: "center",
    display: "grid",

    position: "relative",
    left: "1vh",
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

  const quantityButtonStylesIncrease = {
    backgroundColor: isSelectingIncrease ? "black" : "rgb(173, 68, 103)",
    color: "white",
    border: "1px solid black",
    width: "15%",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const quantityButtonStylesDecrease = {
    backgroundColor: isSelectingDecrease ? "black" : "rgb(173, 68, 103)",
    color: "white",
    border: "1px solid black",
    width: "15%",
    borderRadius: "10px",
    cursor: "pointer",
    boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.19)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };

  const removeFromCartStyles = {
    display: "flex",
    alignItems: "start",
    height: "170px",
    color: isSelectingDelete ? "rgb(173, 68, 103)" : "black",
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
              style={quantityButtonStylesDecrease}
              onMouseEnter={handleMouseEnterDecrease}
              onMouseLeave={handleMouseLeaveDecrease}
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
              style={quantityButtonStylesIncrease}
              onMouseEnter={handleMouseEnterIncrease}
              onMouseLeave={handleMouseLeaveIncrease}
            >
              +
            </button>
          </div>

          <div aria-label="total-price">
            <h3>${totalPrice.toFixed(2)}</h3>
          </div>
        </div>
      </div>
      <div
        className="remove-from-cart-container"
        aria-label="remove-from-cart-button"
        style={removeFromCartStyles}
      >
        <span
          onClick={deleteItem}
          onMouseEnter={handleMouseEnterDelete}
          onMouseLeave={handleMouseLeaveDelete}
        >
          <DeleteIcon sx={{ cursor: "pointer" }} />
        </span>
      </div>
    </div>
  );
}
