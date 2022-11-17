/** @jest-environment jsdom */
import React from 'react';
import ReactDOM from "react-dom";
import { screen} from 'react-test-renderer';
import { render } from '@testing-library/react';
import Header from './Header';
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
  render(<Header />,container);
  expect(container).toBeInTheDocument();
});
