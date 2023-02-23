import React from 'react';
import { screen, render } from '@testing-library/react';
import SliderCustomized from '../components/SliderCustomized';

describe('tests Slider', () => {
  it('renders with a slider', () => {
    const handleChange = vi.fn();
    render(<SliderCustomized handleChange={handleChange} max={10} value={1} />);
    const slider = screen.getByRole('slider');
    expect(slider).toBeInTheDocument();
  });
  it('matches snapshot', () => {
    const handleChange = vi.fn();
    const { container } = render(
      <SliderCustomized handleChange={handleChange} max={10} value={1} />
    );
    expect(container).toMatchSnapshot();
  });
});
