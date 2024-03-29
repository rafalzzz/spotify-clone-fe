import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { CustomHyperlink } from '..';

jest.mock('next/link', () => {
  return ({ children }: { children: JSX.Element }) => children;
});

const HYPERLINK_TEST_ID = 'custom-hyperlink';
const textBeforeHyperlink = 'Before';
const href = '/test';
const hyperlinkText = 'Click me';
const textAfterHyperlink = 'After';
const className = 'test-class';

describe('CustomHyperlink', () => {
  it('renders component without error', () => {
    const props = {
      textBeforeHyperlink,
      href,
      hyperlinkText,
      textAfterHyperlink,
      className,
    };

    const screen = render(<CustomHyperlink {...props} />);
    const { getByTestId, queryByText } = screen;

    expect(getByTestId(HYPERLINK_TEST_ID)).toHaveClass('custom-hyperlink test-class');
    expect(queryByText(textBeforeHyperlink)).toBeInTheDocument();
    expect(queryByText(hyperlinkText)).toBeInTheDocument();
    expect(queryByText(textAfterHyperlink)).toBeInTheDocument();
    expect(screen).toMatchSnapshot();
  });
});
