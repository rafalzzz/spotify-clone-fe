import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { CustomArtistItem } from '../';

const MOCKED_ARTIST_NAME = 'Mocked artist name';
const ARTIST_NAME_TEST_ID = 'custom-artist-item-artist-name';

const renderCustomArtistItem = () => render(<CustomArtistItem artistName={MOCKED_ARTIST_NAME} />);

describe('CustomArtistItem', () => {
  it('renders component without error', () => {
    const screen = renderCustomArtistItem();
    expect(screen).toMatchSnapshot();
  });

  it('artist redirection have correct path', () => {
    const { queryByTestId } = renderCustomArtistItem();

    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistNameElement).toHaveAttribute(
      'href',
      generateArtistRedirectionPath(MOCKED_ARTIST_NAME),
    );
  });
});
