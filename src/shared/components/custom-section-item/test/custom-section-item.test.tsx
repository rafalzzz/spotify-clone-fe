import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';


import { CustomSectionItem } from '../';

const REDIRECTION_TEST_ID = 'custom-section-item-redirection';

const MOCKED_CHILD_CONTENT = 'Mocked Child Content';
const MOCKED_COLLECTION_NAME = 'mocked collection name';
const MOCKED_CHILD = <div>{MOCKED_CHILD_CONTENT}</div>;

const renderCustomSectionItem = () =>
  render(
    <CustomSectionItem collectionName={MOCKED_COLLECTION_NAME}>{MOCKED_CHILD}</CustomSectionItem>,
  );

describe('CustomSectionItem', () => {
  it('renders component without error', () => {
    const screen = renderCustomSectionItem();
    expect(screen).toMatchSnapshot();
  });

  it('renders children correctly', () => {
    const { queryByText } = renderCustomSectionItem();
    expect(queryByText(MOCKED_CHILD_CONTENT)).toBeInTheDocument();
  });

  it('album redirection have correct path', () => {
    const { queryByTestId } = renderCustomSectionItem();

    const artistNameElement = queryByTestId(REDIRECTION_TEST_ID);
    expect(artistNameElement).toHaveAttribute(
      'href',
      generateAlbumRedirectionPath(MOCKED_COLLECTION_NAME),
    );
  });
});
