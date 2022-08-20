import React, { useState, useEffect, Fragment } from "react";
import { Drawer, Button } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

import ShoppingCartItemCard from "../cards/ShoppingCartItemCard";

import "./ShoppingCart.component.css";

export default function ShoppingCart() {
  const [toggleState, setToggleState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setToggleState({ ...toggleState, [anchor]: open });
  };

  const [itemsList, setItemsList] = useState();

  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    var localStorageValues = [],
      keys = Object.keys(localStorage),
      i = keys.length;

    while (i--) {
      localStorageValues.push(JSON.parse(localStorage.getItem(keys[i])));
    }

    // filtering items in the local storage so it's only showing the objects
    // that have a price property. Other objects are not relevant to the cart.

    var filterItems = localStorageValues.filter((el) => el.price >= 0.01);

    setItemsList(filterItems);

    // calculating the total price of the cart

    var total = 0;
    filterItems.forEach((item) => {
      total += item.price;
    });

    setCartTotal(total);
  }, []);

  const clearCart = () => {
    window.localStorage.clear();
  };

  // styles variables

  const shoppingCartButtonStyles = {
    backgroundColor: "white",
    color: "rgb(173, 68, 103)",
    borderRadius: "50%",
    width: "6vh",
    height: "6vh",
    "&:hover": {
      boxShadow: "0px 0px 15px 3px rgba(255, 211, 150, 0.855)",
      backgroundColor: "black",
    },
  };

  return (
    <div>
      <Button
        sx={shoppingCartButtonStyles}
        aria-label="shopping-cart-button"
        onClick={toggleDrawer("right", true)}
      >
        <ShoppingCartIcon />
      </Button>
      <Drawer
        anchor="right"
        open={toggleState["right"]}
        onClose={toggleDrawer("right", false)}
        className="drawer"
      >
        <div className="shoppingCardContentContainer">
          <div className="shoppingCartHeaderContainer">
            <h2 style={{ textDecoration: "underline" }}> My Shopping Cart</h2>
          </div>
          <div className="shoppingCartContainer">
            {itemsList?.map((item, index) => {
              return (
                <Fragment key={index}>
                  <ShoppingCartItemCard
                    title={item.label}
                    price={item.price}
                    imageUrl={item.url}
                    imageAlt={item.label}
                    index={index}
                  />
                </Fragment>
              );
            })}
          </div>
          <div
            aria-label="shopping-cart-total"
            className="shoppingCartTotalContainer"
          >
            <span>
              <h3 style={{ textDecoration: "underline" }}>Cart Total </h3>
              <h3>${cartTotal.toFixed(2)}</h3>
            </span>
          </div>
          <div
            aria-label="shopping-cart-options"
            className="shoppingCartOptionsContainer"
          >
            <button
              className="shoppingCartOptionsButtons"
              aria-label="clear cart button"
              onClick={clearCart}
            >
              Clear Cart
            </button>
            <button
              className="shoppingCartOptionsButtons"
              aria-label="checkout button"
            >
              Checkout
            </button>
          </div>
        </div>
      </Drawer>
    </div>
  );
}

/* 

{items.map((item, index) => {
          return (
            <div aria-label="shopping-cart-item" key={index}>
              <ShoppingPageItemCard
                index={index}
                itemLabel={item.label}
                price={item.price}
                imageUrl={item.url}
                description={item.alt}
              />
            </div>
          );
        })}*/

// breaks tests.
/*
  {itemsList.map((item, index) => {
        return (
        <Fragment key={index}>
        <ShoppingCartItemCard
            title={item.label}
            price={item.price}
            imageUrl={item.url}
            imageAlt={item.label}
            index={index}
          />
          </Fragment>
        
        
          );
        })}

*/
