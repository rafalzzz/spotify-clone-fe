import { render } from '@testing-library/react';
import React from 'react';

import { useMusicPlayerStore } from '@/store/music-player';

import { useCurrentSong } from '@/hooks/use-current-song';

import { EMusicTrackKeys } from '@/types/music-track';

import GLOBAL_SETTINGS from '@/configs/global';

import { HeadSection } from '../';

jest.mock('@/hooks/use-current-song', () => ({
  useCurrentSong: jest.fn(),
}));

const renderHeadSection = () => render(<HeadSection />);

describe('HeadSection', () => {
  it('renders the default title when no song is playing', () => {
    (useCurrentSong as jest.Mock).mockImplementation(() => null);
    renderHeadSection();

    expect(document.title).toBe(GLOBAL_SETTINGS.DEFAULT_TITLE);
  });

  it('renders the song title and artist when a song is playing', () => {
    const mockSong = {
      [EMusicTrackKeys.TRACK_NAME]: 'Test Song',
      [EMusicTrackKeys.ARTIST_NAME]: 'Test Artist',
    };

    useMusicPlayerStore.setState({
      isPlaying: true,
    });

    (useCurrentSong as jest.Mock).mockImplementation(() => mockSong);
    renderHeadSection();

    expect(document.title).toBe('Test Song • Test Artist');
  });
});
