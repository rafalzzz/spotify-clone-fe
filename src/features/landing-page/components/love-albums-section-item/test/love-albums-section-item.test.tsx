import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { useMusicPlayerStore } from '@/store/music-player';

import { EAlbumKeys } from '@/types/album';
import { TSongItem } from '@/types/components';

import { mockSongItem } from '@/consts/mocks';

import { LoveAlbumsSectionItem } from '..';

let mockCachedData: TSongItem[] | null = null;
let mockRefetch = jest.fn();

jest.mock('@/hooks/use-fetch-album-songs', () => ({
  useGetAlbumSongs: () => ({
    cachedData: mockCachedData,
    fetchAlbumSongsAction: { refetch: mockRefetch },
  }),
}));

const mockAlbum = {
  [EAlbumKeys.COLLECTION_ID]: 1,
  [EAlbumKeys.COLLECTION_NAME]: 'AlbumTest',
  [EAlbumKeys.ARTWORK_URL_60]: 'https://www.test-url.com',
  [EAlbumKeys.ARTIST_NAME]: 'ArtistTest',
  [EAlbumKeys.RELEASE_DATE]: '2020-01-01',
};

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';

const renderLoveAlbumsSectionItem = (additionalProps = {}) => {
  const props = {
    album: mockAlbum,
    isPlaying: false,
    isActive: false,
    ...additionalProps,
  };
  return render(<LoveAlbumsSectionItem {...props} />);
};

describe('LoveAlbumsSectionItem', () => {
  it('renders without error', () => {
    const { container } = renderLoveAlbumsSectionItem();
    expect(container).toMatchSnapshot();
  });

  it('calls togglePlay when isActive and the button is clicked', () => {
    const { getByTestId } = renderLoveAlbumsSectionItem({ isActive: true });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    const { togglePlay } = useMusicPlayerStore.getState();
    expect(togglePlay).toHaveBeenCalled();
  });

  it('plays album with cached data when available and the album is not active', () => {
    const { playAlbum } = useMusicPlayerStore.getState();
    mockCachedData = [mockSongItem];

    const { getByTestId } = renderLoveAlbumsSectionItem({ isActive: false });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    expect(playAlbum).toHaveBeenCalledWith({
      albumId: mockAlbum[EAlbumKeys.COLLECTION_ID],
      songs: mockCachedData,
    });
  });

  it('fetches album songs when no cached data is available and the album is not active', () => {
    mockCachedData = null;

    const { getByTestId } = renderLoveAlbumsSectionItem({ isActive: false });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    expect(mockRefetch).toHaveBeenCalled();
  });
});
