import React from "react";
import ShoppingPageItemCard from "../components/cards/ShoppingPageItemCard";

export default function ShoppingPage() {
  return (
    <div>
      <ShoppingPageItemCard
        itemLabel="Heels"
        price="$4.00"
        imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        imageAlt="Item 1"
      />
    </div>
  );
}
