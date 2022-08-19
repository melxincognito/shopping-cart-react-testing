import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //
import userEvent from "@testing-library/user-event";

import App from "./App";
import Layout from "./components/navigation/Layout";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./pages/HomePage";
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

    const shoppingPage = screen.getByText(/Shopping Page/i);
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
    const shopText = screen.getByText(/Shopping Page/i);
    expect(shopText).toBeInTheDocument();
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
