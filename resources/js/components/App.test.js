/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from "react-dom";
import { screen} from 'react-test-renderer';
import { getAllByPlaceholderText, getAllByText, getByAltText, getByLabelText, getByText, render } from '@testing-library/react';
import App from './App';
import '@testing-library/jest-dom';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  ReactDOM.unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Component rendered", () => {
  render(<App />,container);
  expect(container).toBeInTheDocument();
});

it("Component login state", () => {
  const { getByText} = render(<App />, container);
  const tmp = getByText(/Current state: login/i);
  expect(tmp).toBeInTheDocument();
});

it("Component account create text", () => {
  const { getByText} = render(<App />, container);
  const tmp = getByText(/Create an account/i);
  expect(tmp).toBeInTheDocument();
});
