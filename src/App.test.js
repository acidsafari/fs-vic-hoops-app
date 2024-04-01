import { render, screen } from '@testing-library/react';
import App from './App';
import Header from './Components/Header/Header';

/* Test script 1 */
describe('Header', () => {
  test('Header is rendered', () => {
    render(<Header />);
    const linkElement = screen.getByText("Be Part of Something Bigger !");
    expect(linkElement).toBeInTheDocument();
  });
});


/*
test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
*/