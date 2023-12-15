import { render } from '@testing-library/react';
import '@testing-library/jest-dom';

import { useIsTextOverflowing } from '@/footer/hooks/use-is-text-overflowing';

import { useMusicPlayerStore } from '@/store/music-player';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { EMusicTrackKeys } from '@/types/music-track';

import { mockMusicStoreSongsList } from '@/consts/mocks';

import { NowPlayedTrack } from '../';

jest.mock('@/store/music-player', () => ({
  useMusicPlayerStore: jest.fn() as unknown as typeof useMusicPlayerStore,
}));

jest.mock('@/footer/hooks/use-is-text-overflowing', () => ({
  useIsTextOverflowing: jest.fn(),
}));

const NOW_PLAYED_TRACK_TEST_ID = 'now-played-track';
const NOW_PLAYED_TRACK_TITLE_CONTAINER_TEST_ID = 'now-played-track-title-container';
const NOW_PLAYED_TRACK_TITLE_TEST_ID = 'now-played-track-title';
const NOW_PLAYED_TRACK_ARTIST_REDIRECTION_TEST_ID = 'now-played-track-artist-redirection';

const renderNowPlayerTrack = () => render(<NowPlayedTrack />);

describe('NowPlayedTrack', () => {
  beforeEach(() => {
    (useMusicPlayerStore as jest.MockedFunction<typeof useMusicPlayerStore>).mockImplementation(
      () => ({
        activeIndex: 0,
        songsList: mockMusicStoreSongsList,
      }),
    );

    (useIsTextOverflowing as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      isTextOverflowing: false,
    }));
  });

  it('renders empty div when there is no current song', () => {
    (useMusicPlayerStore as jest.MockedFunction<typeof useMusicPlayerStore>).mockImplementation(
      () => ({
        activeIndex: -1,
        songsList: [],
      }),
    );

    const { queryByTestId } = renderNowPlayerTrack();
    const element = queryByTestId(NOW_PLAYED_TRACK_TEST_ID);
    expect(element).toBeEmptyDOMElement();
  });

  it('renders correctly when there is a current song', () => {
    const { queryByTestId } = renderNowPlayerTrack();
    expect(queryByTestId(NOW_PLAYED_TRACK_TEST_ID)).toBeInTheDocument();
  });

  it('renders Image component with correct props', () => {
    const { queryByAltText } = renderNowPlayerTrack();
    const image = queryByAltText('image');

    expect(image).toHaveAttribute('src', '/_next/image?url=%2Fsome-image-url1.jpg&w=128&q=75');
    expect(image).toHaveAttribute('width', '56');
    expect(image).toHaveAttribute('height', '56');
  });

  it('applies overflow class when text is overflowing', () => {
    (useIsTextOverflowing as jest.Mock).mockImplementation(() => ({
      ref: jest.fn(),
      isTextOverflowing: true,
    }));

    const { queryByTestId } = renderNowPlayerTrack();
    const titleContainer = queryByTestId(NOW_PLAYED_TRACK_TITLE_CONTAINER_TEST_ID);

    expect(titleContainer).toHaveClass('now-played-track__title-container--overflow');
  });

  it('renders Link component with correct href and displays artist name', () => {
    const { queryByTestId } = renderNowPlayerTrack();
    const link = queryByTestId(NOW_PLAYED_TRACK_ARTIST_REDIRECTION_TEST_ID);

    expect(link).toHaveAttribute(
      'href',
      generateArtistRedirectionPath(mockMusicStoreSongsList[0][EMusicTrackKeys.ARTIST_NAME]),
    );

    expect(link).toHaveTextContent(mockMusicStoreSongsList[0][EMusicTrackKeys.ARTIST_NAME]);
  });

  it('displays correct song information based on activeIndex from useMusicPlayerStore', () => {
    const { queryByTestId } = renderNowPlayerTrack();
    const title = queryByTestId(NOW_PLAYED_TRACK_TITLE_TEST_ID);
    expect(title).toHaveTextContent(mockMusicStoreSongsList[0][EMusicTrackKeys.TRACK_NAME]);
  });
});
