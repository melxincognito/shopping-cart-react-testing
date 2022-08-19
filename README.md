Creating a shopping cart to practice react testing

## Shopping Cart to practice TDD

## Overview

<ul>
    <li> Creating a shopping cart to practice creating applications in React using Test Driven Development. This project would usually be quick to create but I'm running automated tests with Jest as I go along.</li>
    <li>The application will consist of two landing pages and a shopping cart that is shown as an expandable drawer on the right side of the screen. The first landing page is a simple home screen with images while the second landing page is a shopping page where users can scroll through the products. Each product will display an image, a title, a price and a button that gives the user the ability to add an item to their cart. The application doesn't have a backend so these items are saved into a users localStorage.</li>
    <li>In a users shopping cart they'll see each item they have recently added along with the total for their cart items. If a user would like to increase the quantity for an item in their cart they will be able to perform this while their cart total is automatically updated. They also have the ability to clear all items from their cart at the click of a button.</li>

</ul>

## Getting Started

### 1. Clone the repository and install the dependencies using NPM.

```
git clone https://github.com/melxincognito/shopping-cart-react-testing.git
cd shopping-cart
npm i

```

### 2. Run the app locally

```
npm start
```

### 3. Run all automated tests

```
npm test
```

### 4. View application locally

Open your browser to <b>localhost:3000</b> to view the application locally

## Dependencies

Dependencies List:

<ul>
    <li>@testing-library/jest-dom</li>
    <li>@testing-library/react</li>
    <li>@testing-library/user-event </li>
    <li>react 18.1.0 </li>
    <li>react-dom 18.1.0 </li>
    <li>react-router-dom 6.3.0 </li>
    <li>@mui/material </li>
    <li>@emotion/react </li>
    <li>@emotion/styled </li>
    <li>@mui/system </li>
    <li>@mui/icons-material </li>
</ul>
