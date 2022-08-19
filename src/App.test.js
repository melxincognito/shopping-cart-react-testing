import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom"; //
import userEvent from "@testing-library/user-event";
import App from "./App";
import Layout from "./components/navigation/Layout";
import { MemoryRouter } from "react-router-dom";
import NavBar from "./components/navigation/NavBar";
import HomePage from "./pages/HomePage";
import ShoppingPageItemCard from "./components/cards/ShoppingPageItemCard";

import ShoppingCart from "./components/shopping-cart/ShoppingCart";
import ShoppingCartItemCard from "./components/cards/ShoppingCartItemCard";

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
    const shoppingCart = screen.getByLabelText(/shopping-cart-link/i);
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

    const items = [];
    for (let i = 0; i < 4; i++) {
      items.push(screen.getAllByLabelText("shopping-cart-item"));
    }
    expect(items.length).toBe(4);
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
        price={4}
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

describe("Shopping Cart", () => {
  it("Shows the shopping cart on click", () => {
    render(<ShoppingCart />);

    const button = screen.getByLabelText(/shopping-cart-button/i);

    userEvent.click(button);

    const cartText = screen.getByText(/click me/i);

    expect(cartText).toBeInTheDocument();
  });

  it("Renders the Shopping Cart Item Card with props", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={400}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const title = /heels/i;
    const price = "$400.00";
    const imageUrl =
      "https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80";
    const alt = /heels/i;

    expect(screen.getByText(title)).toBeInTheDocument();
    expect(screen.getByText(price)).toBeInTheDocument();
    expect(screen.getByAltText(alt)).toHaveAttribute("src", imageUrl);
  });

  it("Increases the quantity of items in the shopping card", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={400}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const increaseButton = screen.getByLabelText("increase-quantity-button");

    userEvent.click(increaseButton);

    const input = screen.getByLabelText("quantity-input");
    expect(input.value).toBe("2");
  });

  it("Doesnt allow the shopping cart quanitity to go below 0", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={400}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const decreaseButton = screen.getByLabelText("decrease-quantity-button");

    userEvent.click(decreaseButton);

    const newValue = screen.getByDisplayValue("1");

    expect(newValue).toBeInTheDocument();
  });

  it("Decreases the quantity of items in the shopping card", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={400}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const increaseButton = screen.getByLabelText("increase-quantity-button");
    const decreaseButton = screen.getByLabelText("decrease-quantity-button");

    // increases the quantity of the item in the shopping cart to 7
    for (var i = 0; i < 6; i++) {
      userEvent.click(increaseButton);
    }

    // decreases the quantity of the item in the shopping cart by 3
    for (var i = 0; i < 3; i++) {
      userEvent.click(decreaseButton);
    }

    const newValue = screen.getByLabelText("quantity-input");

    expect(newValue).toHaveValue("4");
  });

  it("Increases the total cost of the item with an increased quantity", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={200}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const increaseButton = screen.getByLabelText("increase-quantity-button");

    // increases the quantity of the item in the shopping cart to 7
    for (var i = 0; i < 6; i++) {
      userEvent.click(increaseButton);
    }

    const totalPriceTextContainer = screen.getByLabelText(/total-price/i);

    expect(totalPriceTextContainer).toHaveTextContent("$1400.00");
  });

  it("Decreases the total cost of the item with a decreased quantity", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={100}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const increaseButton = screen.getByLabelText("increase-quantity-button");
    const decreaseButton = screen.getByLabelText("decrease-quantity-button");

    // increases the quantity of the item in the shopping cart to 9
    for (var i = 0; i < 8; i++) {
      userEvent.click(increaseButton);
    }

    // decreases the quantity of the item in the shopping cart by 2
    for (var i = 0; i < 2; i++) {
      userEvent.click(decreaseButton);
    }

    const totalPriceTextContainer = screen.getByLabelText(/total-price/i);

    expect(totalPriceTextContainer).toHaveTextContent("$700.00");
  });

  it("Updates the price when a user manually inputs the quantity", () => {
    render(
      <ShoppingCartItemCard
        title="Heels"
        price={100}
        imageUrl="https://images.unsplash.com/photo-1660908557507-ffd94784390a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1669&q=80"
        imageAlt="Heels"
        index={1}
      />
    );

    const input = screen.getByLabelText("quantity-input");

    fireEvent.change(input, { target: { value: "7" } });

    const totalPriceTextContainer = screen.getByLabelText(/total-price/i);

    expect(totalPriceTextContainer).toHaveTextContent("$700.00");
  });
});
