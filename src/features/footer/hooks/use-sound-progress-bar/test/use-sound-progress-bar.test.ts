import { renderHook, act } from '@testing-library/react-hooks';
import { ChangeEvent } from 'react';

import { useMusicPlayerContext } from '@/footer/contexts/music-player-context';

import { useSoundProgressBar } from '../';

jest.mock('@/footer/contexts/music-player-context');

const mockUseMusicPlayerContext = useMusicPlayerContext as jest.Mock;

const renderUseProgressBar = () => renderHook(() => useSoundProgressBar());

describe('useSoundProgressBar', () => {
  let ref: { current: Partial<HTMLAudioElement> | null };

  beforeEach(() => {
    ref = { current: { volume: 0.5 } };
    mockUseMusicPlayerContext.mockReturnValue({ ref });
  });

  it('initializes with the default volume and muted state', () => {
    const {
      result: {
        current: { volume, isMuted },
      },
    } = renderUseProgressBar();

    expect(volume).toBe(0.5);
    expect(isMuted).toBe(false);
  });

  it('toggles mute state and adjusts volume accordingly', () => {
    const { result } = renderUseProgressBar();

    act(() => {
      result.current.toggleMuted();
    });

    expect(result.current.isMuted).toBe(true);
    expect(result.current.volume).toBe(0);

    act(() => {
      result.current.toggleMuted();
    });

    expect(result.current.isMuted).toBe(false);
    expect(result.current.volume).toBe(0.5);
  });

  it('handles volume change and updates mute state', () => {
    const { result } = renderUseProgressBar();

    act(() => {
      result.current.handleChange({
        target: { valueAsNumber: 0.8 },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.volume).toBe(0.8);
    expect(result.current.isMuted).toBe(false);
  });

  it('sets volume to initial value on mount', () => {
    renderUseProgressBar();
    expect(ref.current?.volume).toBe(0.5);
  });

  it('handles no player ref correctly', () => {
    ref.current = null;

    const { result } = renderUseProgressBar();

    act(() => {
      result.current.toggleMuted();
    });

    expect(result.current.isMuted).toBe(false);

    act(() => {
      result.current.handleChange({
        target: { valueAsNumber: 0.3 },
      } as ChangeEvent<HTMLInputElement>);
    });

    expect(result.current.volume).toBe(0.3);
  });
});
