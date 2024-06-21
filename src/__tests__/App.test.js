import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../components/App";
import { isClassComponent } from "../utils/componentUtils"; // Assuming you have this utility function

test("uses a class component", () => {
  expect(isClassComponent(App)).toBe(true);
});

test("renders App component", () => {
  render(<App />);
  const linkElement = screen.getByText(/Shopster/i);
  expect(linkElement).toBeInTheDocument();
});
