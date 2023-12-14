import { render } from '@testing-library/react';
import React, { createRef } from 'react';

import { useAudio } from '@/footer/hooks/use-audio';

import { EMusicTrackKeys } from '@/types/music-track';

import { Audio } from '../';

jest.mock('@/footer/hooks/use-audio');

const mockSetCurrentTime = () => {};
const renderAudio = () => render(<Audio setCurrentTime={mockSetCurrentTime} />);

describe('Audio', () => {
  const mockUseAudio = {
    ref: createRef(),
    currentSong: { [EMusicTrackKeys.PREVIEW_URL]: 'test-audio-url.mp3' },
    isPlaying: true,
    onLoadedMetadata: jest.fn(),
    onTimeUpdate: jest.fn(),
    onEnded: jest.fn(),
  };

  beforeEach(() => {
    (useAudio as jest.Mock).mockReturnValue(mockUseAudio);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders component without error', () => {
    const screen = renderAudio();
    expect(screen).toMatchSnapshot();
  });
});
