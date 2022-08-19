import React, { useState } from "react";
import { Drawer, Button, Divider } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

export default function ShoppingCart() {
  const [state, setState] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
        open={state["right"]}
        onClose={toggleDrawer("right", false)}
      >
        Shopping Cart
      </Drawer>
    </div>
  );
}
