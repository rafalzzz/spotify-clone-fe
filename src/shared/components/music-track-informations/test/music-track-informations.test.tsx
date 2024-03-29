import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { useRouter } from 'next/navigation';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { MusicTrackInformation } from '../';

const MOCKED_TRACK_NAME = 'Mocked title';

const FIRST_ARTIST_NAME = 'Mocked First TArtist Name';
const MOCKED_ARTIST_NAME = `${FIRST_ARTIST_NAME}, Second TArtist Name`;
const MOCKED_ARTIST_ID = 1;

const TRACK_NAME_TEST_ID = 'music-track-informations-track-name';
const ARTIST_NAME_TEST_ID = 'music-track-informations-artist-name';
const TRACK_NAME_TOOLTIP_TEST_ID = 'music-track-informations-track-name-tooltip';
const ARTIST_NAME_TOOLTIP_TEST_ID = 'music-track-informations-artist-name-tooltip';

const mockPush = jest.fn();

beforeEach(() => {
  (useRouter as jest.Mock).mockImplementation(() => ({
    push: mockPush,
  }));
});

const renderMusicTrackInformation = () =>
  render(
    <MusicTrackInformation
      trackName={MOCKED_TRACK_NAME}
      artistName={MOCKED_ARTIST_NAME}
      artistId={MOCKED_ARTIST_ID}
    />,
  );

describe('MusicTrackInformation', () => {
  beforeEach(() => {
    mockPush.mockClear();
  });

  it('renders component without error', () => {
    const screen = renderMusicTrackInformation();
    expect(screen).toMatchSnapshot();
  });

  it('renders the track name and main artist name', () => {
    const { queryByTestId } = renderMusicTrackInformation();

    const trackNameElement = queryByTestId(TRACK_NAME_TEST_ID);
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    expect(trackNameElement).toBeInTheDocument();
    expect(artistNameElement).toBeInTheDocument();
  });

  it('displays only the main artist when multiple artists are given', () => {
    const { queryByTestId } = renderMusicTrackInformation();

    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);
    expect(artistNameElement).toHaveTextContent(FIRST_ARTIST_NAME);
  });

  it('passes track name to the track tooltip', () => {
    const { queryByTestId, queryByText } = renderMusicTrackInformation();

    const trackNameTooltip = queryByTestId(TRACK_NAME_TOOLTIP_TEST_ID);
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(MOCKED_TRACK_NAME, { selector: 'span' });
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('passes main artist name to the artist tooltip', () => {
    const { queryByTestId } = renderMusicTrackInformation();

    const artistNameTooltip = queryByTestId(ARTIST_NAME_TOOLTIP_TEST_ID);
    expect(artistNameTooltip).toBeInTheDocument();

    const tooltipTitle = (queryByTestId(ARTIST_NAME_TEST_ID) as HTMLElement).querySelector('span');
    expect(tooltipTitle).toBeInTheDocument();
  });

  it('navigates to the correct path when artist name is clicked', () => {
    const { queryByTestId } = renderMusicTrackInformation();
    const artistNameElement = queryByTestId(ARTIST_NAME_TEST_ID);

    fireEvent.click(artistNameElement as Element);

    const expectedPath = generateArtistRedirectionPath(MOCKED_ARTIST_ID);
    expect(mockPush).toHaveBeenCalledWith(expectedPath);
  });
});
