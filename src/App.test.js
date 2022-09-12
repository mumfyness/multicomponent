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

/** Sidebar Image list Tests **/
test("render Sidebar Image list Tests", () => {
  render(<App />);
  var thumbImage = screen.getByAltText(/thm1/i);
  expect(thumbImage).toBeInTheDocument();
  thumbImage = screen.getByAltText(/thm2/i);
  expect(thumbImage).toBeInTheDocument();
  thumbImage = screen.getByAltText(/thm3/i);
  expect(thumbImage).toBeInTheDocument();
  thumbImage = screen.getByAltText(/thm4/i);
  expect(thumbImage).toBeInTheDocument();
});

/** Content Tests **/
test("render Content Image", () => {
  render(<App />);
  const imageElement = screen.getByAltText(/selectedimage/i);
  expect(imageElement).toBeInTheDocument();
});
