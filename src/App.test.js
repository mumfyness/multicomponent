import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Tetradigital preview link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Preview Tetradigital/i);
  expect(linkElement).toBeInTheDocument();
});
