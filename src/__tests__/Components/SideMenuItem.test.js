import React from 'react';
import { render, screen } from '@testing-library/react';
import SideMenuItem from '../../Components/SideMenuItem';
import SideMenuIcon from '../../Components/SideMenuIcon';

test('renders menu icon', () => {
  const text = 'Home';
  var open = true;
  render(<SideMenuItem key='1' text={text} open={open}  icon={ <SideMenuIcon name={text}/> }/>);
  const elem = screen.getByTestId('menu-container');
  expect(elem).toBeInTheDocument();
  expect(elem).toContainHTML('<svg');
  expect(elem).toContainHTML('<path');
});
