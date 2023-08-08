import { render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Link from 'next/link';
import '@testing-library/jest-dom/extend-expect';

import { CustomHyperlink } from '..';

jest.mock('next/link', () => {
  return ({ children }) => {
    return children;
  };
});

const textBeforeHyperlink = 'Before';
const href = '/test';
const hyperlinkText = 'Click me';
const textAfterHyperlink = 'After';
const className = 'test-class';

const renderCustomHyperlink = () => {
  const props = {
    textBeforeHyperlink,
    href,
    hyperlinkText,
    textAfterHyperlink,
    className,
  };

  return render(<CustomHyperlink {...props} />);
};

describe('CustomHyperlink', () => {
  it('renders component without error', () => {
    const screen = renderCustomHyperlink();
    const { getByTestId, queryByText } = screen;

    expect(getByTestId('custom-hyperlink')).toHaveClass('custom-hyperlink test-class');
    expect(queryByText(textBeforeHyperlink)).toBeInTheDocument();
    expect(queryByText(hyperlinkText)).toBeInTheDocument();
    expect(queryByText(textAfterHyperlink)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
