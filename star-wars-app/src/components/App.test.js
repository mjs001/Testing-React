// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import React from "react";
import { render, fireEvent, wait, cleanup } from "@testing-library/react";
import { getData as mockGetData } from "../api";
import StarWarsCharacters from "./StarWarsCharacters";

test("Renders the previous and next buttons", () => {
  const { getByText } = render(<StarWarsCharacters />);
  const previousButton = getByText(/Previous/i);
  const nextButton = getByText(/Next/i);

  fireEvent.click(previousButton);
  fireEvent.click(nextButton);
});
jest.mock("../api");

const fakeData = {
  next: "https://swapi.co/api/people/?page=2",
  previous: null,
  results: [
    { name: "person1", url: "1url" },
    { name: "person2", url: "2url" }
  ]
};

mockGetData.mockResolvedValue(fakeData);
test("api works", async () => {
  const { getByText } = render(<StarWarsCharacters />);

  await wait(() => expect(getByText(/person1/i)));
  getByText(/person1/i);

  expect(mockGetData).toHaveBeenCalledWith("https://swapi.co/api/people");
});
