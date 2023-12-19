import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { create } from 'zustand';
import '@testing-library/jest-dom';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys } from '@/types/music-track';

import { LoveSongsSectionItem } from '..';

const createTestMusicPlayerStore = () =>
  create(() => ({
    isPlaying: false,
    togglePlay: jest.fn(),
    changeSong: jest.fn(),
  }));

jest.mock('@/store/music-player', () => {
  return {
    useMusicPlayerStore: createTestMusicPlayerStore(),
  };
});

const song = {
  [EMusicTrackKeys.TRACK_ID]: 1,
  [EMusicTrackKeys.ARTWORK_URL_60]: '/some-image-url1.jpg',
  [EMusicTrackKeys.TRACK_NAME]: 'TestTrack',
  [EMusicTrackKeys.ARTIST_NAME]: 'Test_Artist',
  [EMusicTrackKeys.COLLECTION_NAME]: 'collectionName',
  [EMusicTrackKeys.PREVIEW_URL]: 'http://example.com/preview.mp3',
};

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';

const renderLoveSongsSectionItem = (additionalProps = {}) => {
  const props = { song, isPlaying: false, isActive: false, ...additionalProps };
  return render(<LoveSongsSectionItem {...props} />);
};

describe('LoveSongsSectionItem', () => {
  it('renders without error', () => {
    const { container } = renderLoveSongsSectionItem();
    expect(container).toMatchSnapshot();
  });

  it('calls togglePlay when isActive and the button is clicked', () => {
    const { getByTestId } = renderLoveSongsSectionItem({ isActive: true });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    const { togglePlay } = useMusicPlayerStore.getState();
    expect(togglePlay).toHaveBeenCalled();
  });

  it('calls changeSong when not isActive and the button is clicked', () => {
    const { getByTestId } = renderLoveSongsSectionItem({ isActive: false });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    const { changeSong } = useMusicPlayerStore.getState();
    expect(changeSong).toHaveBeenCalledWith({
      activeIndex: 0,
      songs: [
        {
          artistName: song[EMusicTrackKeys.ARTIST_NAME],
          trackName: song[EMusicTrackKeys.TRACK_NAME],
          previewUrl: song[EMusicTrackKeys.PREVIEW_URL],
          artworkUrl60: song[EMusicTrackKeys.ARTWORK_URL_60],
        },
      ],
    });
  });
});
