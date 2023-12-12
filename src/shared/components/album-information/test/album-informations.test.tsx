import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/navigation';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { AlbumInformation } from '..';

const MOCKED_COLLECTION_NAME = 'Mocked album name';
const MOCKED_RELEASE_DATE = '2020-01-01';
const MOCKED_ARTIST_NAME = `Mocked artist name`;

const COLLECTION_NAME_TEST_ID = 'album-information-collection-name';
const RELEASE_DATE_TEST_ID = 'album-information-release-date';
const ARTIST_NAME_TEST_ID = 'album-information-artist-name';

const TRACK_NAME_TOOLTIP_TEST_ID = 'album-information-collection-name-tooltip';
const ARTIST_NAME_TOOLTIP_TEST_ID = 'album-information-artist-name-tooltip';

const mockPush = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    push: mockPush,
  }));
});

const renderAlbumInformation = () =>
  render(
    <AlbumInformation
      collectionName={MOCKED_COLLECTION_NAME}
      releaseDate={MOCKED_RELEASE_DATE}
      artistName={MOCKED_ARTIST_NAME}
    />,
  );

describe('AlbumInformation', () => {
  it('renders component without error', () => {
    const screen = renderAlbumInformation();
    expect(screen).toMatchSnapshot();
  });

  it('renders the collection name, release year and artist name', () => {
    const { queryByTestId } = renderAlbumInformation();

    const collectionNameElement = queryByTestId(COLLECTION_NAME_TEST_ID);
    const releaseDateElement = queryByTestId(RELEASE_DATE_TEST_ID);
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    expect(collectionNameElement).toBeInTheDocument();
    expect(releaseDateElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
  });

  it('passes collection name to the collection tooltip', () => {
    const { queryByTestId, queryByText } = renderAlbumInformation();

    const trackNameTooltip = queryByTestId(TRACK_NAME_TOOLTIP_TEST_ID);
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(MOCKED_COLLECTION_NAME, { selector: 'span' });
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('renders correct release year', () => {
    const { queryByTestId } = renderAlbumInformation();

    const releaseDateElement = queryByTestId(RELEASE_DATE_TEST_ID);
    expect(releaseDateElement).toHaveTextContent('2020');
  });

  it('passes artist name to the artist tooltip', () => {
    const { queryByTestId } = renderAlbumInformation();

    const artistNameTooltip = queryByTestId(ARTIST_NAME_TOOLTIP_TEST_ID);
    expect(artistNameTooltip).toBeInTheDocument();

    const tooltipTitle = (artistNameTooltip as HTMLElement).querySelector('span');
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('navigates to the correct path when artist name is clicked', () => {
    const { queryByTestId } = renderAlbumInformation();
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    fireEvent.click(artistNameElement as Element);

    const expectedPath = generateArtistRedirectionPath(MOCKED_ARTIST_NAME);
    expect(mockPush).toHaveBeenCalledWith(expectedPath);
  });
});
