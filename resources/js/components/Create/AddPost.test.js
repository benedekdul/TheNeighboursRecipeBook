/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from "react-dom";
import { getAllByText, render, screen } from '@testing-library/react';
import AddPost from './AddPost';
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
  render(<AddPost />,container);
  expect(container).toBeInTheDocument();
});

it("Component add post text", () => {
    const { getByText} = render(<AddPost />, container);
    let tmp = screen.getAllByText(/Add Post/i);
    expect(tmp[0]).toBeInTheDocument();
  });
  