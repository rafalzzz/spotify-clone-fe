import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useCurrentSong } from '@/hooks/use-current-song';

import { EMusicTrackKeys } from '@/types/music-track';

import { mockSongItem } from '@/consts/mocks';

import { NowPlayedTrack } from '../';

jest.mock('@/hooks/use-current-song', () => ({
  useCurrentSong: jest.fn(),
}));

const NOW_PLAYED_TRACK_CONTAINER_TEST_ID = 'now-played-track';
const NOW_PLAYED_TRACK_TRACK_TITLE_TOOLTIP_TEST_ID = 'now-played-track-track-name-tooltip';
const NOW_PLAYED_TRACK_SONG_REDIRECTION_TEST_ID = 'now-played-track-title-redirection';
const NOW_PLAYED_TRACK_TRACK_TITLE_TEST_ID = 'now-played-track-title-text';
const NOW_PLAYED_TRACK_ARTIST_REDIRECTION_TEST_ID = 'now-played-track-artist-redirection';

const renderNowPlayedTrack = () => render(<NowPlayedTrack />);

describe('NowPlayedTrack', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCurrentSong as jest.Mock).mockReturnValue(mockSongItem);
  });

  it('renders empty div when there is no current song', () => {
    (useCurrentSong as jest.Mock).mockReturnValueOnce(null);

    const { queryByTestId } = renderNowPlayedTrack();
    const element = queryByTestId(NOW_PLAYED_TRACK_CONTAINER_TEST_ID);
    expect(element).toBeEmptyDOMElement();
  });

  it('renders correctly when there is a current song', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    expect(queryByTestId(NOW_PLAYED_TRACK_CONTAINER_TEST_ID)).toBeInTheDocument();
  });

  it('renders Image component with correct props', () => {
    const { getByAltText } = renderNowPlayedTrack();
    const image = getByAltText('image');

    expect(image).toHaveAttribute('src', '/_next/image?url=%2Fsome-image-url1.jpg&w=128&q=75');
    expect(image).toHaveAttribute('width', '56');
    expect(image).toHaveAttribute('height', '56');
  });

  it('displays correct song information', () => {
    const { getByTestId } = renderNowPlayedTrack();
    const title = getByTestId(NOW_PLAYED_TRACK_TRACK_TITLE_TEST_ID);
    expect(title).toBeInTheDocument();
  });

  it('passes track name to the track tooltip', () => {
    const { queryByTestId, queryByText, getByTestId } = renderNowPlayedTrack();
    const title = getByTestId(NOW_PLAYED_TRACK_TRACK_TITLE_TEST_ID);

    fireEvent.mouseEnter(title);

    const trackNameTooltip = queryByTestId(NOW_PLAYED_TRACK_TRACK_TITLE_TOOLTIP_TEST_ID);
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(mockSongItem[EMusicTrackKeys.TRACK_NAME], {
      selector: 'span',
    });

    expect(tooltipTitle).toBeInTheDocument();
  });

  it('renders Link component with correct href and displays track name', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    const link = queryByTestId(NOW_PLAYED_TRACK_SONG_REDIRECTION_TEST_ID);

    expect(link).toHaveAttribute('href', `/track/${mockSongItem[EMusicTrackKeys.TRACK_ID]}`);
    expect(link).toHaveTextContent(mockSongItem[EMusicTrackKeys.TRACK_NAME]);
  });

  it('renders Link component with correct href and displays artist name', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    const link = queryByTestId(NOW_PLAYED_TRACK_ARTIST_REDIRECTION_TEST_ID);

    expect(link).toHaveAttribute('href', `/artist/${mockSongItem[EMusicTrackKeys.ARTIST_ID]}`);
    expect(link).toHaveTextContent(mockSongItem[EMusicTrackKeys.ARTIST_NAME]);
  });
});
