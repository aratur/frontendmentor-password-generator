import React from 'react';
import { screen, render, cleanup } from '@testing-library/react';
import Strength, { StrengthTypes } from '../components/Strength';

const values: Array<StrengthTypes> = [
  'too weak!',
  'weak',
  'medium',
  'strong',
  '',
];

describe('test Strength component', () => {
  it('to have 4 bars', () => {
    render(<Strength strength="too weak!" />);
    const strengthBars = screen.getAllByTestId('bar');
    expect(strengthBars.length).toBe(4);
  });
  it('to have 4 bars with props value set on data attribute', () => {
    for (const item of values) {
      const value = item as StrengthTypes;
      render(<Strength strength={value} />);
      const strengthBars = screen.getAllByTestId('bar');
      strengthBars.forEach((b) => {
        expect(b.dataset.type).toBe(value);
      });
      cleanup();
    }
  });
  it('to have proper label', () => {
    for (const item of values) {
      const value = item as StrengthTypes;
      render(<Strength strength={value} />);
      const header = screen.getByRole('heading');
      expect(header.innerHTML).toBe(value);
      cleanup();
    }
  });
});
