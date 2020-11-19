import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

it('renders correctly', () => {
  const { queryByTestId } = render(<About />);
  expect(queryByTestId('About')).toBeTruthy();
});
