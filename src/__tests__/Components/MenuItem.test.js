import React from 'react';
import { render, screen } from '@testing-library/react';
import MenuItem from '../../Components/MenuItem';
import MenuIcon from '../../Components/MenuIcon';

test('renders menu icon', () => {
  const text = 'Home';
  var open = true;
  render(<MenuItem key='1' text={text} open={open}  icon={ <MenuIcon name={text}/> }/>);
  const elem = screen.getByTestId('menu-container');
  expect(elem).toBeInTheDocument();
  expect(elem).toContainHTML('<svg');
  expect(elem).toContainHTML('<path');
});
