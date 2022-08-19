import React from "react";
import ShoppingPageItemCard from "../components/cards/ShoppingPageItemCard";
import "./ShoppingPage.css";
export default function ShoppingPage() {
  return (
    <div className="mainContainer">
      <div className="header">
        <h2>MV Studio Originals</h2>
      </div>
      <div className="shoppingPageContentContainer">
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
        })}
      </div>
    </div>
  );
}

const items = [
  {
    label: "Heels",
    price: 7.9,
    url: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80",
    alt: "heels",
  },
  {
    label: "Lipstick",
    price: 3.99,
    url: "https://images.unsplash.com/photo-1571646034647-52e6ea84b28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1200&q=80",
    alt: "lipstick",
  },
  {
    label: "Purse",
    price: 50.7,
    url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    alt: "purse",
  },
  {
    label: "Shoes",
    price: 44.77,
    url: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80",
    alt: "shoes",
  },
  {
    label: "Dress",
    price: 80,
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    alt: "dress",
  },
];
