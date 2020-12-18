import { render, screen } from '@testing-library/react';
import MenuIcon from '../../Components/MenuIcon';

test('with Home renders Home icon', () => {
  render(<MenuIcon name='Home'/>);
  const iconElem = screen.getByTestId('Home');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});

test('with About renders About icon', () => {
  render(<MenuIcon name='About'/>);
  const iconElem = screen.getByTestId('About');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});

test('with noIcon renders Home icon', () => {
  render(<MenuIcon name='noIcon'/>);
  const iconElem = screen.getByTestId('Home');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});



