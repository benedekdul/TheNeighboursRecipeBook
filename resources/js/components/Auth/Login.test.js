/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from "react-dom";
import { getAllByText, render, screen } from '@testing-library/react';
import Login from './Login';
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
  render(<Login />,container);
  expect(container).toBeInTheDocument();
});

it("Component login text", () => {
  const { getByText} = render(<Login />, container);
  let tmp = screen.getAllByText(/Login/i);
  expect(tmp[0]).toBeInTheDocument();
});

it("Component email text", () => {
  const { getByText} = render(<Login />, container);
  let tmp = screen.getAllByText(/E-mail/i);
  expect(tmp[0]).toBeInTheDocument();
});

it("Component password text", () => {
  const { getByText} = render(<Login />, container);
  let tmp = screen.getAllByText(/Password/i);
  expect(tmp[0]).toBeInTheDocument();
});
