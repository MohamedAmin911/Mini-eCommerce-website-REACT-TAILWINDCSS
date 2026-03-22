# eCommerce React App

A modern eCommerce front-end built with React, Vite, Tailwind CSS, Redux Toolkit, React Router, Formik, and Yup.

## Overview

This project includes:
- a register page with validation
- a protected products page
- a product details page
- a cart page connected to Redux
- a contact page with validation
- shared navbar branding and navigation helpers

The app uses:
- `AuthContext` for simple authentication state
- Redux Toolkit for cart state management
- Formik + Yup for form handling and validation
- React Router for navigation
- Tailwind CSS for styling

## Features

### Authentication
- User registration form with validation
- Stores the registered user in context
- Protects the products page using a custom `ProtectedRoute`

### Products
- Fetches products from `https://dummyjson.com/products`
- Displays a product list page
- Displays individual product details page

### Cart
- Add products to cart from the product details page
- Increase and decrease quantity
- Remove products from cart
- Cart badge updates dynamically
- Cart data is stored in Redux

### Contact
- Contact form with validation for:
  - email
  - first name
  - last name
  - optional phone number
  - message
- Form reset after submit

### UI
- Reusable navbar component on all pages except the register page
- Reusable form field component for clean form code
- Reusable styled `eCommerce` logo component

## Tech Stack

- React
- Vite
- Tailwind CSS
- React Router DOM
- Redux Toolkit
- React Redux
- Axios
- Formik
- Yup
- React Icons

## Project Structure

```text
src/
  components/
    AppLogo.jsx
    AppNavbar.jsx
    CartButton.jsx
    ContactButton.jsx
    FormField.jsx
    ProtectedRoute.jsx
  context/
    AuthContext.js
  pages/
    cart-page/
      cart-page.jsx
      CartItem.jsx
    contact-page/
      ContactPage.jsx
    product-page/
      ProductPage.jsx
    products-page/
      ProductsPage.jsx
      components/
        ProductCard.jsx
    register-page/
      RegisterPage.jsx
  providers/
    AuthProvider.jsx
  redux/
    reducer.js
    store.js
  App.jsx
  main.jsx
```

## Routes

- `/` -> Register page
- `/products` -> Products page, protected route
- `/products/:product` -> Product details page
- `/products/cart` -> Cart page
- `/contact` -> Contact page

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start development server

```bash
npm run dev
```

### 3. Build for production

```bash
npm run build
```

### 4. Preview production build

```bash
npm run preview
```

## Validation Summary

### Register Page
- name: required
- username: required
- email: required, valid email format
- password: required, min 8 chars, uppercase, lowercase, number, special character
- confirm password: required, must match password

### Contact Page
- email: required, valid email format
- first name: required
- last name: required
- phone number: optional
- message: required, min 10 chars, max 500 chars

## State Management

### Auth Context
`AuthContext` is used to store the logged-in user after registration.

### Redux Cart Slice
The cart reducer supports:
- `addProduct`
- `removeProduct`
- `increaseQuantity`
- `decreaseQuantity`

## Notes

- Product data is fetched from DummyJSON.
- The authentication flow is front-end only.
- This project is focused on learning React patterns such as routing, context, Redux, reusable components, and validation.

## Author

Built as a React training project.
