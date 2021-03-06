import { render, screen, fireEvent } from '@testing-library/react';
import App, { replaceCamelWithSpaces } from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

/* 
  How does jest work, how does it know whether is test is passed or failed?
  - If the function doesn't throw any error its a pass.
  - If it throws an error then its a failure.
*/

/* 
Since it a empty test and not throwing any error it should pass.
*/
test('empty test', () => {});

/* Using Accessibility */
test('renders learn react link via accessibilty', () => {
  render(<App />);
  const linkElement = screen.getByRole('link', { name: /learn react/i });
  expect(linkElement).toBeInTheDocument();
});

// Test if initial color is MediumVioletRed and button text is 'change to MidnightBlue'
test('button has correct initial state', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(btn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

// Test the button click and see if color changes to MidnightBlue and text changes to MediumVioletRed.
test('button has correct state after click', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });

  // Click the button.
  fireEvent.click(btn);

  expect(btn).toHaveStyle({ backgroundColor: 'MidnightBlue' });
  expect(btn).toHaveTextContent('Change to MediumVioletRed');
});

test('check initial state of button is enabled on checkbox is unchecked', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  expect(btn).toBeEnabled();
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

// Test if button is disabled on checkbox check.
test('Check if button is disabled on checkbox check', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  // 1st click
  fireEvent.click(checkbox);
  expect(btn).toBeDisabled();

  // 2nd Click
  fireEvent.click(checkbox);
  expect(btn).toBeEnabled();
});

// Test if button turns gray and check box click and becomes MediumVioletRed on uncheck.
test('check disabled state of the button', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  // 1st Click
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray' });

  // 2nd click (uncheck)
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'MediumVioletRed' });
});

// Test if button turns gray and check box click and becomes MidnightBlue on uncheck.
test('check disabled state of the button after button click', () => {
  render(<App />);
  const btn = screen.getByRole('button', { name: 'Change to MidnightBlue' });
  const checkbox = screen.getByRole('checkbox', { name: 'Disable Button' });

  // Button click
  fireEvent.click(btn);
  // 1st Click

  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'gray' });

  // 2nd click (uncheck)
  fireEvent.click(checkbox);
  expect(btn).toHaveStyle({ backgroundColor: 'MidnightBlue' });
});

// Unit Testing
describe('space before camel case capital letters', () => {
  test('Works for no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });

  test('Works for one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });

  test('Works for multiple inner capital letters', () => {
    expect(replaceCamelWithSpaces('VioletRedBlue')).toBe('Violet Red Blue');
  });
});
