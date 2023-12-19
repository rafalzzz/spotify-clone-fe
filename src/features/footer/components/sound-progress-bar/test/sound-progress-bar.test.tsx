import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import '@testing-library/jest-dom/extend-expect';

import { useSoundProgressBar } from '@/footer/hooks/use-sound-progress-bar';

import { SoundProgressBar } from '../';

jest.mock('@/footer/hooks/use-sound-progress-bar', () => ({
  useSoundProgressBar: jest.fn(),
}));

const SOUND_PROGRESS_BAR_BUTTON_TEST_ID = 'sound-progress-bar-button';
const PROGRESS_BAR_TEST_ID = 'progress-bar';
const MUTED_SOUND_ICON_TEST_ID = 'muted-sound-icon';
const SOUND_ICON_TEST_ID = 'sound-icon';

const toggleMutedMock = jest.fn();
const handleChangeMock = jest.fn();

const initialProps = {
  isMuted: false,
  volume: 0.5,
  toggleMuted: toggleMutedMock,
  handleChange: handleChangeMock,
};

const renderSoundProgressBar = () => render(<SoundProgressBar />);

describe('SoundProgressBar', () => {
  beforeEach(() => {
    (useSoundProgressBar as jest.Mock).mockReturnValue(initialProps);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders correctly', () => {
    const { queryByTestId } = renderSoundProgressBar();
    expect(queryByTestId(SOUND_PROGRESS_BAR_BUTTON_TEST_ID)).toBeInTheDocument();
    expect(queryByTestId(PROGRESS_BAR_TEST_ID)).toBeInTheDocument();
  });

  it('toggles mute state on button click', () => {
    const { getByTestId } = renderSoundProgressBar();
    fireEvent.click(getByTestId(SOUND_PROGRESS_BAR_BUTTON_TEST_ID));
    expect(toggleMutedMock).toHaveBeenCalled();
  });

  it('displays the SoundIcon icon when sound is not muted', () => {
    const { getByTestId } = renderSoundProgressBar();
    expect(getByTestId(SOUND_ICON_TEST_ID)).toBeInTheDocument();
  });

  it('displays the MutedSoundIcon icon when sound is muted', () => {
    (useSoundProgressBar as jest.Mock).mockReturnValue({
      ...initialProps,
      isMuted: true,
    });

    const { getByTestId } = renderSoundProgressBar();
    expect(getByTestId(MUTED_SOUND_ICON_TEST_ID)).toBeInTheDocument();
  });

  it('calls handleChange when progress bar volume change', () => {
    const { getByTestId } = renderSoundProgressBar();

    const progressBar = getByTestId(PROGRESS_BAR_TEST_ID);
    fireEvent.change(progressBar, { target: { value: 0.7 } });

    expect(handleChangeMock).toHaveBeenCalled();
  });
});
