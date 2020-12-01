import { render, screen } from '@testing-library/react';
import AccountMenu from '../AccountMenu';


test('renders iconbutton', () => {
    render(<AccountMenu />);
  
    const versionElem = screen.getByTestId('menu-iconbutton');
    expect(versionElem).toBeInTheDocument();
  });

test('renders menu', () => {
  render(<AccountMenu />);

  const versionElem = screen.getByTestId('menu-appbar');
  expect(versionElem).toBeInTheDocument();
});

test('renders profile option', () => {
    render(<AccountMenu />);
  
    const versionElem = screen.getByText('Profile');
    expect(versionElem).toBeInTheDocument();
  });

