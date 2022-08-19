import React, { useState, useEffect } from "react";
import { Drawer, Button, Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

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
  }, []);

  // styles variables

  const shoppingCartButtonStyles = {
    backgroundColor: "white",
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
        <div className="mainContainer">
          <button onClick={() => console.log(itemsList)}>click me </button>
        </div>
      </Drawer>
    </div>
  );
}

// breaks tests.
/*
  {itemsList.forEach((item, index) => {
          <div key={index}>
            <h3> {item.label}</h3>
            <h4> {item.price}</h2>
          </div>;
        })}

*/
