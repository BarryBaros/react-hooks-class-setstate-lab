import React from 'react';
import { shallow } from 'enzyme';
import ShoppingList from '../ShoppingList';

test("uses a functional component", () => {
  // Check if ShoppingList is a functional component
  const wrapper = shallow(<ShoppingList items={[]} />);
  expect(typeof wrapper.type()).toBe('function');
});

test("displays all items when initially rendered", () => {
  // Render ShoppingList with initial items and check if all are displayed
  const items = [
    { id: 1, name: "Apple", category: "Produce" },
    { id: 2, name: "Milk", category: "Dairy" },
    { id: 3, name: "Cake", category: "Dessert" }
  ];
  const wrapper = shallow(<ShoppingList items={items} />);
  expect(wrapper.find('Item')).toHaveLength(items.length);
});
