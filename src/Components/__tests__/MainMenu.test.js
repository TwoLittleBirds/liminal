import { render, screen } from '@testing-library/react';
import MainMenu from '../MainMenu';


test('renders appbar', () => {
  render(<MainMenu />);

  const elem = screen.getByTestId("menu-appbar");
  expect(elem).toBeInTheDocument();
});

test('renders toolbar', () => {
  render(<MainMenu />);

  const elem = screen.getByTestId("menu-toolbar");
  expect(elem).toBeInTheDocument();
});

test('renders iconbutton', () => {
    render(<MainMenu />);
  
    const elem = screen.getByTestId("menu-iconbutton");
    expect(elem).toBeInTheDocument();
});

test('renders heading', () => {
  render(<MainMenu />);

  const elem = screen.getByTestId("menu-heading");
  expect(elem).toBeInTheDocument();
});

test('renders drawer', () => {
  render(<MainMenu />);

  const elem = screen.getByTestId("menu-drawer");
  expect(elem).toBeInTheDocument();
});



