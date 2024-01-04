import { act, renderHook } from '@testing-library/react-hooks';

import { EMusicTrackKeys } from '@/types/music-track';

import { mockSongItem } from '@/consts/mocks';

import { useFavoritesStore } from '..';

jest.unmock('@/store/favorites');

const renderuseFavoritesStore = () => renderHook(() => useFavoritesStore());

describe('useFavoritesStore', () => {
  it('should add song to favorites and then remove song from favorites', () => {
    const { result } = renderuseFavoritesStore();

    expect(result.current.favorites).toHaveLength(0);

    act(() => {
      result.current.addToFavorites(mockSongItem);
    });

    expect(result.current.favorites).toHaveLength(1);
    expect(result.current.favorites[0]).toBe(mockSongItem);

    act(() => {
      result.current.removeFromFavorites(mockSongItem[EMusicTrackKeys.TRACK_ID]);
    });

    expect(result.current.favorites).toHaveLength(0);
  });
});
