import React from "react";
import "./HomePage.css";

export default function HomePage() {
  return (
    <div className="main-container">
      <div className="image-container">
        {images.map((image, index) => {
          return (
            <img
              id="header-image"
              key={index}
              src={image.img}
              alt={image.alt}
            />
          );
        })}
      </div>
      <div className="circle">
        {" "}
        <h2> M.I. Studio </h2>{" "}
      </div>
      <div className="store-description">
        {" "}
        <h2> Shop all your favorites at M.I. Studio</h2>
      </div>
    </div>
  );
}

const images = [
  {
    img: "https://images.unsplash.com/photo-1603798125914-7b5d27789248?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "shirt",
  },
  {
    img: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80",
    alt: "womens rack",
  },
  {
    img: "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1742&q=80",
    alt: "sneakers",
  },
  {
    img: "https://images.unsplash.com/photo-1625093742435-6fa192b6fb10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1778&q=80",
    alt: "makeup",
  },
];
