import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //
import userEvent from "@testing-library/user-event";
import App from "./App";
import Layout from "./components/navigation/Layout";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./pages/HomePage";
import ShoppingPageItemCard from "./components/cards/ShoppingPageItemCard";
// MEMORY ROUTER
// https://stackoverflow.com/questions/70220413/error-usehref-may-be-used-only-in-the-context-of-a-router-component-it-wor
// https://v5.reactrouter.com/web/guides/testing

describe("Layout component", () => {
  it("Renders the navigation bar", () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );
    const navBar = document.getElementById("nav-bar");
    expect(navBar).toBeInTheDocument();
  });
});

describe("Navigation bar component", () => {
  it("has the link to the home page", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const homeLink = screen.getByText(/Home/i);
    expect(homeLink).toBeInTheDocument();
  });
  it("has the link to the shop page", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );

    const shopLink = screen.getByText(/Shop/i);
    expect(shopLink).toBeInTheDocument();
  });
  it("has the link to shopping cart", () => {
    render(
      <MemoryRouter>
        <NavBar />
      </MemoryRouter>
    );
    const shoppingCart = document.getElementById("shopping-cart");
    expect(shoppingCart).toBeInTheDocument();
  });
});

describe("App component", () => {
  it("Has the shopping page content on shop route", () => {
    render(
      <MemoryRouter initialEntries={["/shop/"]}>
        <App />
      </MemoryRouter>
    );

    const shoppingPage = screen.getByText(/heels/i);
    expect(shoppingPage).toBeInTheDocument();
  });

  it("Renders shopping page content after click", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const shopButton = screen.getByLabelText("shop-link");
    userEvent.click(shopButton);
    const addToCartText = screen.getByText(/add to cart/i);
    expect(addToCartText).toBeInTheDocument();
  });

  it("Renders homepage content from shopping page on home click", () => {
    render(
      <MemoryRouter initialEntries={["/shop/"]}>
        <App />
      </MemoryRouter>
    );

    const homeButton = screen.getByLabelText("home-link");
    userEvent.click(homeButton);
    const homeImage = screen.getByAltText(/shirt/i);
    expect(homeImage).toBeInTheDocument();
  });
});

describe("Home Page", () => {
  it("renders four images", () => {
    render(<HomePage />);

    let images = [];

    for (let i = 0; i < 4; i++) {
      images.push(screen.getAllByRole("img", { id: /header-image/i }));
    }
    expect(images.length).toBe(4);
  });
});

describe("Shopping Cart Item Card", () => {
  it("renders the correct input item information", () => {
    render(
      <ShoppingPageItemCard
        itemLabel="Heels"
        price="$4.00"
        imageUrl="https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80"
        imageAlt="Item 1"
      />
    );

    let itemLabel = /heels/i;
    let price = "$4.00";
    let imageUrl =
      "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1760&q=80";
    let imageAlt = /item 1/i;
    expect(screen.getByText(itemLabel)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByAltText(imageAlt)).toHaveAttribute("src", imageUrl);
  });
});
