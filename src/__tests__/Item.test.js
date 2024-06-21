import "@testing-library/jest-dom";
import { render, screen, fireEvent } from "@testing-library/react";
import Item from "../components/Item";

function isClassComponent(component) {
  return (
    typeof component === "function" && 
    !!component.prototype &&
    !!component.prototype.isReactComponent
  );
}

test("uses a class component", () => {
  expect(isClassComponent(Item)).toBe(true);
});

test("the <li> does not have a className when initialized", () => {
  render(<Item name="Milk" category="Dairy" />);
  const listItem = screen.getByText("Milk");
  expect(listItem).toBeInTheDocument();
  expect(listItem.parentElement).not.toHaveClass("in-cart");
});

test("the <li> has a className of 'in-cart' when the Add to Cart button is clicked", () => {
  render(<Item name="Milk" category="Dairy" />);
  fireEvent.click(screen.getByText("Add to Cart"));
  const listItem = screen.getByText("Milk");
  expect(listItem.parentElement).toHaveClass("in-cart");
});
