import { render, screen } from '@testing-library/react';
import App from './App';

/** Navbar Tests **/
test("render Home link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Home/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Tetradigital preview link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Preview Tetradigital/i);
  expect(linkElement).toBeInTheDocument();
});

test("render Contact Us link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Contact Us/i);
  expect(linkElement).toBeInTheDocument();
});

/** Sidebar Tests **/
test("render Sidebar Image Choices", () => {
  render(<App />);
  const displayElement = screen.getByText(/Image Choices/i);
  expect(displayElement).toBeInTheDocument();
});

/** Content Tests **/
test("render Content Image", () => {
  render(<App />);
  const imageElement = screen.getElement(/flightpicture/i);
  expect(imageElement).toBeInTheDocument();
});
