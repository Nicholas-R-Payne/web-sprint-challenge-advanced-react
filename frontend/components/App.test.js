import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AppFunctional from './AppFunctional';

test('renders without errors', () => {
  render(<AppFunctional/>)
})

test('renders the heading "Coordinates"', () => {
  render(<AppFunctional/>)

  const heading = screen.queryByText('Coordinates', { exact: false });

  expect(heading).toBeVisible()
  expect(heading).toBeInTheDocument()
})