import { render, screen } from '@testing-library/react';
import MainLayout from '../../Components/MainLayout';
import { FlagsProvider } from 'react-feature-flags';

const flags = [{name: "AdminOnly", isActive: true}]

test('renders appbar', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-appbar");
  expect(elem).toBeInTheDocument();
});

test('renders toolbar', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-toolbar");
  expect(elem).toBeInTheDocument();
});

test('renders iconbutton open', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);
  
    const elem = screen.getByTestId("menu-iconopen");
    expect(elem).toBeInTheDocument();
});

test('renders iconbutton close', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-iconclose");
  expect(elem).toBeInTheDocument();
});

test('renders heading', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-heading");
  expect(elem).toBeInTheDocument();
});

test('renders drawer', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-drawer");
  expect(elem).toBeInTheDocument();
});

test('renders divider', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-divider");
  expect(elem).toBeInTheDocument();
});

test('renders options', () => {
  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  const elem = screen.getByTestId("menu-options");
  expect(elem).toBeInTheDocument();
});

test('when not active does not render options', () => {
  const flags = [{name: "AdminOnly", isActive: false}]

  render(<FlagsProvider value={flags}>
    <MainLayout/>
  </FlagsProvider>);

  expect(() => screen.getByTestId("menu-options")).toThrowError();
});



