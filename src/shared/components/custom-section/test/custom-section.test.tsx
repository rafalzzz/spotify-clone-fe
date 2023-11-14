import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { CustomSection } from '../index';

const TITLE = 'Test Section';
const REDIRECTION_URL = '/mocked-url';
const CHILD_TEST_ID = 'child-test-id';
const CONTENT = 'Mocked Content';

const CUSTOM_SECTION_HEADER_TEST_ID = 'custom-section-header';
const CUSTOM_SECTION_SHOW_ALL_ITEMS_TEST_ID = 'custom-section-show-all-items';

const renderCustomSection = () =>
  render(
    <CustomSection title={TITLE} redirectionUrl={REDIRECTION_URL}>
      <div data-testid={CHILD_TEST_ID}>{CONTENT}</div>
    </CustomSection>,
  );

describe('CustomSection', () => {
  it('renders component without error', () => {
    const screen = renderCustomSection();
    expect(screen).toMatchSnapshot();
  });

  it('renders the section with provided title', () => {
    const { queryByRole } = renderCustomSection();
    expect(queryByRole('heading', { name: TITLE })).toBeInTheDocument();
  });

  it('renders the children content', () => {
    const { queryByTestId } = renderCustomSection();
    expect(queryByTestId(CHILD_TEST_ID)).toHaveTextContent(CONTENT);
  });

  it('contains a link with the provided redirection URL for the title', () => {
    const { queryByTestId } = renderCustomSection();
    const titleLink = queryByTestId(CUSTOM_SECTION_HEADER_TEST_ID);
    expect(titleLink).toHaveAttribute('href', REDIRECTION_URL);
  });

  it('contains a link with the provided redirection URL for the "Show all"', () => {
    const { queryByTestId } = renderCustomSection();
    const showAllLink = queryByTestId(CUSTOM_SECTION_SHOW_ALL_ITEMS_TEST_ID);
    expect(showAllLink).toHaveAttribute('href', REDIRECTION_URL);
  });
});
