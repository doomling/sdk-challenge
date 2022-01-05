import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders main empty content", () => {
  render(<App />);
  const title = screen.getByText(/Decentraland Documentation/i);
  expect(title).toBeInTheDocument();
});

test("renders sidebar link", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/catalyst/)[0];
  expect(linkElement).toBeInTheDocument();
});

test("checks if element has correctly generated path", () => {
  render(<App />);
  const linkElement = screen.getAllByText(/MONITORING/)[0] as HTMLAnchorElement;
  expect(linkElement.href).toContain("/dependencies/catalyst/docs/MONITORING");
});
