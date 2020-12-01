import { render, screen } from '@testing-library/react';
import Version from '../version';

var pjson = require('../../../package.json');

test('renders version', () => {
  render(<Version />);
  const versionElem = screen.getByText('Version ' + pjson.version);
  expect(versionElem).toBeInTheDocument();
});