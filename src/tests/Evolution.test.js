import React from 'react';
import {
  render,
} from '@testing-library/react';
import Evolution from '../components/Evolution';

it('renders correctly', () => {
  const { queryByTestId } = render(<Evolution />);
  expect(queryByTestId('Evolution')).toBeTruthy();
});
