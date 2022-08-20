import React from "react";
import ShoppingPageItemCard from "../components/cards/ShoppingPageItemCard";
import "./ShoppingPage.css";
export default function ShoppingPage() {
  return (
    <div className="mainContainer">
      <div className="header">
        <h2>M.I. Studio Originals</h2>
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
    label: "Long Dress",
    price: 80,
    url: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1173&q=80",
    alt: "dress",
  },
  {
    label: "Green Romper",
    price: 70.77,
    url: "https://images.unsplash.com/photo-1618932260643-eee4a2f652a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1380&q=80",
    alt: "Green Romper",
  },

  {
    label: "Gray Hat",
    price: 20.72,
    url: "https://images.unsplash.com/photo-1521369909029-2afed882baee?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    alt: "Gray Hat",
  },
  {
    label: "Lip Socks",
    price: 10.99,
    url: "https://images.unsplash.com/photo-1586350977771-b3b0abd50c82?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fHNvY2tzfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=700&q=60",
    alt: " lip socks",
  },
  {
    label: "Windbreaker",
    price: 100.77,
    url: "https://images.unsplash.com/photo-1611308725032-74f0a551d018?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1322&q=80",
    alt: "Rain coat",
  },
  {
    label: "Winter Coat",
    price: 170.77,
    url: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29hdHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
    alt: "Brown Winter Coat",
  },
  {
    label: "Bomber Jacket",
    price: 110.17,
    url: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1336&q=80",
    alt: "Bomber Jacket",
  },
  {
    label: "Floral Heels",
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
    label: "Small Purse",
    price: 50.7,
    url: "https://images.unsplash.com/photo-1566150905458-1bf1fc113f0d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
    alt: "purse",
  },
  {
    label: "LV Sneakers",
    price: 44.77,
    url: "https://images.unsplash.com/photo-1587563871167-1ee9c731aefb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2031&q=80",
    alt: "shoes",
  },
];
