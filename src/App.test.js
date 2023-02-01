import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Image Carousel Heading', () => {
  render(<App />);
  const heading = screen.getByText(/Image Carousel/i);
  expect(heading).toBeInTheDocument();
});

test('renders right arrow', () => {
  render(<App />);
  const rightArrow = screen.getByText(/⮕/i);
  expect(rightArrow).toBeInTheDocument();
});

test('renders left arrow', () => {
  render(<App />);
  const leftArrow = screen.getByText(/⬅/i);
  expect(leftArrow).toBeInTheDocument();
});