import { renderHook, act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';

import * as musicPlayerContext from '@/footer/contexts/music-player-context';

import { useMusicPlayerStore } from '@/store/music-player';

import { useMusicProgressBar } from '../';

jest.mock('@/footer/contexts/music-player-context', () => ({
  useMusicPlayerContext: jest.fn(),
}));

const mockRef = { current: { currentTime: 0 } };

const renderUseMusicProgressBar = () => renderHook(() => useMusicProgressBar());

describe('useMusicProgressBar', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    (musicPlayerContext.useMusicPlayerContext as jest.Mock).mockReturnValue({ ref: mockRef });

    useMusicPlayerStore.setState({
      duration: 30,
    });
  });

  it('initializes state correctly', () => {
    const { result } = renderUseMusicProgressBar();

    expect(result.current.duration).toBe(30);
    expect(result.current.currentTime).toBe(0);
    expect(result.current.temporaryTime).toBeNull();
    expect(result.current.isReversedTime).toBe(false);
  });

  it('handles start, change, and end of slider correctly', () => {
    const newTime = 20;
    const { result } = renderUseMusicProgressBar();

    act(() => {
      result.current.handleStartChange();
      result.current.handleChange({
        target: { valueAsNumber: newTime },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.temporaryTime).toBe(newTime);

    // Simulate user releasing the slider
    act(() => {
      result.current.handleEndChange();
    });

    expect(mockRef.current.currentTime).toBe(newTime);
    expect(result.current.temporaryTime).toBeNull();
  });

  it('toggles isReversedTime state correctly', () => {
    const { result } = renderUseMusicProgressBar();

    act(() => {
      result.current.onClick();
    });

    expect(result.current.isReversedTime).toBe(true);

    act(() => {
      result.current.onClick();
    });

    expect(result.current.isReversedTime).toBe(false);
  });
});
