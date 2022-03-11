import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'
import AppFunctional from './AppFunctional';

test('renders without errors', () => {
  render(<AppFunctional/>)
})

test('renders the heading "Coordinates"', () => {
  render(<AppFunctional/>)

  const coordinatesHeading = screen.queryByText('Coordinates', { exact: false });

  expect(coordinatesHeading).toBeVisible()
  expect(coordinatesHeading).toBeInTheDocument()
})

test('renders the button "UP"', () => {
  render(<AppFunctional/>)

  const upButton = screen.getByText('UP', { exact: false });

  expect(upButton).toBeVisible()
  expect(upButton).toBeInTheDocument()
})

test('typing on the input results in its value changing to the entered text', () => {
  render(<AppFunctional/>)

  const input = screen.queryByPlaceholderText('type email')
  fireEvent.change(input, { target: {value: 'nick@email.com' } })
  screen.findByText('nick@email.com')
})

test('pressing up then pressing right has correct coordinates', () => {
  render(<AppFunctional/>)

  const upButton = screen.getByText('UP', { exact: false });
  const rightButton = screen.getByText('RIGHT', { exact: false });

  fireEvent.click(upButton);
  fireEvent.click(rightButton);

  const coords = screen.getByText('3, 1', { exact: false })
  const steps = screen.getByText('You moved 2 times', { exact: false });

  expect(coords).toBeTruthy();
  expect(steps).toBeTruthy();
})