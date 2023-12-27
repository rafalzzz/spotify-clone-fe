import { fireEvent, render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useCurrentSong } from '@/hooks/use-current-song';

import { EMusicTrackKeys } from '@/types/music-track';

import { mockSongItem } from '@/consts/mocks';

import { NowPlayedTrack } from '../';

jest.mock('@/hooks/use-current-song', () => ({
  useCurrentSong: jest.fn(),
}));

const renderNowPlayedTrack = () => render(<NowPlayedTrack />);

describe('NowPlayedTrack', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (useCurrentSong as jest.Mock).mockReturnValue(mockSongItem);
  });

  it('renders empty div when there is no current song', () => {
    (useCurrentSong as jest.Mock).mockReturnValueOnce(null);

    const { queryByTestId } = renderNowPlayedTrack();
    const element = queryByTestId('now-played-track');
    expect(element).toBeEmptyDOMElement();
  });

  it('renders correctly when there is a current song', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    expect(queryByTestId('now-played-track')).toBeInTheDocument();
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
    const title = getByTestId('now-played-track-title-text');
    expect(title).toBeInTheDocument();
  });

  it('passes track name to the track tooltip', () => {
    const { queryByTestId, queryByText, getByTestId } = renderNowPlayedTrack();
    const title = getByTestId('now-played-track-title-text');

    fireEvent.mouseEnter(title);

    const trackNameTooltip = queryByTestId('now-played-track-track-name-tooltip');
    expect(trackNameTooltip).toBeInTheDocument();

    const tooltipTitle = queryByText(mockSongItem[EMusicTrackKeys.TRACK_NAME], {
      selector: 'span',
    });

    expect(tooltipTitle).toBeInTheDocument();
  });

  it('renders Link component with correct href and displays track name', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    const link = queryByTestId('now-played-track-title-redirection');

    expect(link).toHaveAttribute('href', `/track/${mockSongItem[EMusicTrackKeys.TRACK_ID]}`);
    expect(link).toHaveTextContent(mockSongItem[EMusicTrackKeys.TRACK_NAME]);
  });

  it('renders Link component with correct href and displays artist name', () => {
    const { queryByTestId } = renderNowPlayedTrack();
    const link = queryByTestId('now-played-track-artist-redirection');

    expect(link).toHaveAttribute('href', `/artist/${mockSongItem[EMusicTrackKeys.ARTIST_ID]}`);
    expect(link).toHaveTextContent(mockSongItem[EMusicTrackKeys.ARTIST_NAME]);
  });
});
