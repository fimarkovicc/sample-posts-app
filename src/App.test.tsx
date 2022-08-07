import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Post List title', () => {
  render(<App />);
  const linkElement = screen.getByText(/post list/i);
  expect(linkElement).toBeInTheDocument();
});
