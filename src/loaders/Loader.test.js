import React from 'react';
import { cleanup, render } from '@testing-library/react';
import Loader from './Loader';

afterEach(cleanup);

test('renders learn react link', () => {
  const { getByText, getByAltText } = render(<Loader />);
  const pElement = getByText(/Loading.../i);
  expect(pElement).toBeInTheDocument();
});
