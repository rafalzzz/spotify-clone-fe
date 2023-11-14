import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { AlbumInformations } from '..';

const MOCKED_COLLECTION_NAME = 'Mocked album name';
const MOCKED_RELEASE_DATE = '2020-01-01';
const MOCKED_ARTIST_NAME = `Mocked artist name`;

const COLLECTION_NAME_TEST_ID = 'album-informations-collection-name';
const RELEASE_DATE_TEST_ID = 'album-informations-release-date';
const ARTIST_NAME_TEST_ID = 'album-informations-artist-name';

const TRACK_NAME_TOOLTIP_TEST_ID = 'album-informations-collection-name-tooltip';
const ARTIST_NAME_TOOLTIP_TEST_ID = 'album-informations-artist-name-tooltip';

const renderAlbumInformations = () =>
  render(
    <AlbumInformations
      collectionName={MOCKED_COLLECTION_NAME}
      releaseDate={MOCKED_RELEASE_DATE}
      artistName={MOCKED_ARTIST_NAME}
    />,
  );

describe('AlbumInformations', () => {
  it('renders component without error', () => {
    const screen = renderAlbumInformations();
    expect(screen).toMatchSnapshot();
  });

  it('renders the collection name, release year and artist name', () => {
    const { queryByTestId } = renderAlbumInformations();

    const collectionNameElement = queryByTestId(COLLECTION_NAME_TEST_ID);
    const releaseDateElement = queryByTestId(RELEASE_DATE_TEST_ID);
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    expect(collectionNameElement).toBeInTheDocument();
    expect(releaseDateElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
  });

  it('passes collection name to the collection tooltip', () => {
    const { queryByTestId, queryByText } = renderAlbumInformations();

    const trackNameTooltip = queryByTestId(TRACK_NAME_TOOLTIP_TEST_ID);
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(MOCKED_COLLECTION_NAME, { selector: 'span' });
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('renders correct release year', () => {
    const { queryByTestId } = renderAlbumInformations();

    const releaseDateElement = queryByTestId(RELEASE_DATE_TEST_ID);
    expect(releaseDateElement).toHaveTextContent('2020');
  });

  it('passes artist name to the artist tooltip', () => {
    const { queryByTestId } = renderAlbumInformations();

    const artistNameTooltip = queryByTestId(ARTIST_NAME_TOOLTIP_TEST_ID);
    expect(artistNameTooltip).toBeInTheDocument();

    const tooltipTitle = (artistNameTooltip as HTMLElement).querySelector('span');
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('artist redirection have correct path', () => {
    const { queryByTestId } = renderAlbumInformations();

    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistNameElement).toHaveAttribute(
      'href',
      generateArtistRedirectionPath(MOCKED_ARTIST_NAME),
    );
  });
});
