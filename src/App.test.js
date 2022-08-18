import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom"; //
import userEvent from "@testing-library/user-event";

import App from "./App";
import Layout from "./components/navigation/Layout";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";

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
  it("Has the homepage content on the home route", () => {
    render(
      <MemoryRouter initialEntries={["/"]}>
        <App />
      </MemoryRouter>
    );

    const homePage = screen.getByText(/Home Page/i);
    expect(homePage).toBeInTheDocument();
  });

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

    const shopButton = screen.getByText(/Shop/i);
    userEvent.click(shopButton);
    const shopText = screen.getByText(/Shopping Page/i);
    expect(shopText).toBeInTheDocument();
  });
});
