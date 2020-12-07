import { render, screen } from '@testing-library/react';
import MainLayout from '../MainLayout';


test('renders appbar', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-appbar");
  expect(elem).toBeInTheDocument();
});

test('renders toolbar', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-toolbar");
  expect(elem).toBeInTheDocument();
});

test('renders iconbutton', () => {
    render(<MainLayout />);
  
    const elem = screen.getByTestId("menu-iconbutton");
    expect(elem).toBeInTheDocument();
});

test('renders heading', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-heading");
  expect(elem).toBeInTheDocument();
});

test('renders drawer', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-drawer");
  expect(elem).toBeInTheDocument();
});



