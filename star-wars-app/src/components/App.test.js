// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, wait } from "@testing-library/react";
import StarWarsCharacters from "./StarWarsCharacters";
test("checks to see if buttons are rendering", () => {
  const { getByText, getByLabelText } = render(<StarWarsCharacters />);
  fireEvent.click(getByText(/previous/i));
  fireEvent.click(getByText(/next/i));
});
