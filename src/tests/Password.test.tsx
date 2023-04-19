import React from 'react';
import { screen, render, fireEvent } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import Password from '../components/Password';

describe('Password component', () => {
  it('copied not visible initially', () => {
    // mock clipboard
    Object.assign(window.navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(
      <Password copyLabel="Copy" password="1234" placeholder="placeholder" />
    );
    const copiedHidden = screen.getByTestId('copied');
    expect(copiedHidden).not.toHaveClass('copy-password__message--visible');
  });
  it('copies password shows copied message', () => {
    // mock clipboard
    Object.assign(window.navigator, {
      clipboard: {
        writeText: vi.fn().mockImplementation(() => Promise.resolve()),
      },
    });

    render(
      <Password copyLabel="Copy" password="1234" placeholder="placeholder" />
    );
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(window.navigator.clipboard.writeText).toBeCalledWith('1234');
    const copied = screen.getByTestId('copied');
    expect(copied).toHaveClass('copy-password__message--visible');
  });
});
