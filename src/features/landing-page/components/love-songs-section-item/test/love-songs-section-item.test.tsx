import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom';

import { useMusicPlayerStore } from '@/store/music-player';

import { EMusicTrackKeys, TMusicTrack } from '@/types/music-track';

import { mockSongItem } from '@/consts/mocks';

import { LoveSongsSectionItem } from '..';

const PLAY_BUTTON_TEST_ID = 'custom-section-item-play-button';

const renderLoveSongsSectionItem = (additionalProps = {}) => {
  const props = {
    song: mockSongItem as TMusicTrack,
    isPlaying: false,
    isActive: false,
    ...additionalProps,
  };

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

  it('calls playSong when not isActive and the button is clicked', () => {
    const { getByTestId } = renderLoveSongsSectionItem({ isActive: false });
    const playButton = getByTestId(PLAY_BUTTON_TEST_ID);
    fireEvent.click(playButton);

    const { playSong } = useMusicPlayerStore.getState();
    expect(playSong).toHaveBeenCalledWith({
      trackId: mockSongItem[EMusicTrackKeys.TRACK_ID],
      songs: [
        {
          [EMusicTrackKeys.ARTIST_NAME]: mockSongItem[EMusicTrackKeys.ARTIST_NAME],
          [EMusicTrackKeys.COLLECTION_NAME]: mockSongItem[EMusicTrackKeys.COLLECTION_NAME],
          [EMusicTrackKeys.TRACK_NAME]: mockSongItem[EMusicTrackKeys.TRACK_NAME],
          [EMusicTrackKeys.PREVIEW_URL]: mockSongItem[EMusicTrackKeys.PREVIEW_URL],
          [EMusicTrackKeys.ARTWORK_URL_60]: mockSongItem[EMusicTrackKeys.ARTWORK_URL_60],
          [EMusicTrackKeys.ARTIST_ID]: mockSongItem[EMusicTrackKeys.ARTIST_ID],
          [EMusicTrackKeys.COLLECTION_ID]: mockSongItem[EMusicTrackKeys.COLLECTION_ID],
          [EMusicTrackKeys.TRACK_ID]: mockSongItem[EMusicTrackKeys.TRACK_ID],
        },
      ],
    });
  });
});
