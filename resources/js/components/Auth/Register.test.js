/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from "react-dom";
import { getAllByText, render, screen } from '@testing-library/react';
import Register from './Register';
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
  render(<Register />,container);
  expect(container).toBeInTheDocument();
});

it("Component register text", () => {
  const { getByText} = render(<Register />, container);
  let tmp = screen.getAllByText(/Register/i);
  expect(tmp[0]).toBeInTheDocument();
});

it("Component email text", () => {
  const { getByText} = render(<Register />, container);
  let tmp = screen.getAllByText(/E-mail/i);
  expect(tmp[0]).toBeInTheDocument();
});

it("Component password text", () => {
  const { getByText} = render(<Register />, container);
  let tmp = screen.getAllByText(/Password/i);
  expect(tmp[0]).toBeInTheDocument();
});