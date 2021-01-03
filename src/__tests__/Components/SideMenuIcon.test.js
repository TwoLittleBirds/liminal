import { render, screen } from '@testing-library/react';
import SideMenuIcon from '../../Components/SideMenuIcon';

test('with Home renders Home icon', () => {
  render(<SideMenuIcon name='Home'/>);
  const iconElem = screen.getByTestId('icon-svg');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});

test('with About renders About icon', () => {
  render(<SideMenuIcon name='About'/>);
  const iconElem = screen.getByTestId('icon-svg');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});

test('with noIcon renders Home icon', () => {
  render(<SideMenuIcon name='noIcon'/>);
  const iconElem = screen.getByTestId('icon-svg');
  expect(iconElem).toBeInTheDocument();
  expect(iconElem).toContainHTML('<path');
});



