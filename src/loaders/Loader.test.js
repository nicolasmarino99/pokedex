import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Loader from './Loader';

test('renders learn react link', () => {
  const { getByText, getByAltText } = render(<Loader />);
  const pElement = getByText(/Loading.../i);
  const imgElement = getByAltText(/logo/i);
  expect(pElement).toBeInTheDocument();
  expect(imgElement).toBeInTheDocument();
});