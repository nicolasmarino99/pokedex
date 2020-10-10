import React from 'react';
import {
  render,
} from '@testing-library/react';
import Moves from '../components/Moves';

it('renders correctly', () => {
  const { queryByTestId } = render(<Moves />);
  expect(queryByTestId('Moves')).toBeTruthy();
});
