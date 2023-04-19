import React from 'react';
import { screen, render } from '@testing-library/react';
import CharacterLength from '../components/CharacterLength';

describe('Character Length', () => {
  it('snapshot', () => {
    const { container } = render(
      <CharacterLength label="Character Length" charLength={1234} />
    );
    expect(container).toMatchSnapshot();
  });
  it('renders props', () => {
    render(<CharacterLength label="Character Length" charLength={1234} />);
    const chars = screen.getByText(/1234/i);
    expect(chars).toBeInTheDocument();
  });
});
