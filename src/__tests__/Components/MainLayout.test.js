import { render, screen } from '@testing-library/react';
import MainLayout from '../../Components/MainLayout';


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

test('renders iconbutton open', () => {
    render(<MainLayout />);
  
    const elem = screen.getByTestId("menu-iconopen");
    expect(elem).toBeInTheDocument();
});

test('renders iconbutton close', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-iconclose");
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

test('renders divider', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-divider");
  expect(elem).toBeInTheDocument();
});

test('renders options', () => {
  render(<MainLayout />);

  const elem = screen.getByTestId("menu-options");
  expect(elem).toBeInTheDocument();
});



