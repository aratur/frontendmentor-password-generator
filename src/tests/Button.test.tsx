import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
import ButtonCustomized from '../components/ButtonCustomized';

describe('ButtonCustomized', () => {
  it('snapshot', () => {
    const handleClicked = vi.fn();
    const { container } = render(
      <ButtonCustomized name="Generate" onClick={handleClicked} />
    );
    expect(container).toMatchSnapshot();
  });
  it('calls prop function when clicked', () => {
    const handleClicked = vi.fn();
    render(<ButtonCustomized name="Generate" onClick={handleClicked} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(handleClicked).toHaveBeenCalled();
  });
});
