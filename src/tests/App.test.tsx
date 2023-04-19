import React, { ChangeEvent } from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import App from './AppWithTranslation';
// import SliderCustomized from '../components/SliderCustomized';

type Props = {
  value: number;
  max: number;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

vi.mock('../components/SliderCustomized.tsx', () => ({
  default: vi.fn().mockImplementation((props: Props) => {
    const { value, max, handleChange } = props;
    return (
      <>
        <p>
          {value} Mocked Slider {max}
        </p>
        <input
          value="2"
          type="text"
          aria-label="slider"
          onChange={(e) => handleChange(e)}
        />
      </>
    );
  }),
}));

describe('Main Application component', () => {
  it('passes basic test', () => {
    render(<p>Hello</p>);
    expect(false).toBeFalsy();
  });
  it('renders App', () => {
    render(<App />);
    const title = screen.getByText(/appName/i);
    expect(title).toBeInTheDocument();
  });
  it('renders with no password', () => {
    render(<App />);
    const element = screen.getByRole('textbox', { name: /slider/i });
    expect(element).toBeInTheDocument();

    const password = screen.getByRole('textbox', { name: '' });
    const passwordTyped = password as HTMLInputElement;
    expect(passwordTyped.value.length).toBe(0);
  });
  it('generates password of a given length', () => {
    const charLength = 8;
    render(<App initUpperCase initCharLength={charLength} />);
    const password = screen.getByRole('textbox', { name: '' });
    const passwordTyped = password as HTMLInputElement;
    expect(passwordTyped.value.length).toBe(charLength);
  });
  it('when a generate button is clicked a new password is generated', () => {
    const charLength = 8;
    render(<App initUpperCase initCharLength={charLength} />);
    const password = screen.getByRole('textbox', { name: '' });
    const passwordTyped = password as HTMLInputElement;
    const oldPassword = passwordTyped.value;

    const button = screen.getByRole('button', { name: /generate/i });
    fireEvent.click(button);

    const newPasswordElement = screen.getByRole('textbox', { name: '' });
    const newPasswordTyped = newPasswordElement as HTMLInputElement;
    const newPassword = newPasswordTyped.value;
    expect(newPassword).not.toBe(oldPassword);
  });
});
