import { renderHook } from '@testing-library/react-hooks';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/navigation';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';
import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';
import { generateShareTrackUrl } from '@/utils/generate-share-track-url';

import { EMusicTrackKeys } from '@/types/music-track';

import { mockMenuInfo, mockSongItem } from '@/consts/mocks';

import { useSongContextMenu } from '..';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
const mockCopyToClipboard = jest.fn();

const ADD_TO_FAVORITES_ITEM_LABEL = 'Add to favorites';
const SHARE_ITEM_LABEL = 'Share';
const GO_TO_ALBUM_ITEM_LABEL = 'Go to album';
const GO_TO_ARTIST_ITEM_LABEL = 'Go to artist';

const renderUseSongContextMenu = () =>
  renderHook(() =>
    useSongContextMenu({ song: mockSongItem, copytoClipboard: mockCopyToClipboard }),
  );

describe('useSongContextMenu', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('creates menu items with correct labels', () => {
    const { result } = renderUseSongContextMenu();

    const items = result.current as MenuItemType[];
    expect(items[0].label).toBe(ADD_TO_FAVORITES_ITEM_LABEL);
    expect(items[1].label).toBe(SHARE_ITEM_LABEL);
    expect(items[2].label).toBe(GO_TO_ALBUM_ITEM_LABEL);
    expect(items[3].label).toBe(GO_TO_ARTIST_ITEM_LABEL);
  });

  it('calls copy to clipboard with share URL on share click', () => {
    const { result } = renderUseSongContextMenu();

    const items = result.current as MenuItemType[];
    const shareItem = items.find(({ label }) => label === SHARE_ITEM_LABEL);

    if (shareItem && shareItem.onClick) {
      shareItem.onClick(mockMenuInfo);

      expect(mockCopyToClipboard).toHaveBeenCalledWith(
        generateShareTrackUrl(mockSongItem[EMusicTrackKeys.COLLECTION_ID]),
      );
    } else {
      fail('Share item not found in the menu');
    }
  });

  it('navigates to album on go to album click', () => {
    const { result } = renderUseSongContextMenu();

    const items = result.current as MenuItemType[];
    const goToAlbumItem = items.find(({ label }) => label === GO_TO_ALBUM_ITEM_LABEL);

    if (goToAlbumItem && goToAlbumItem.onClick) {
      goToAlbumItem.onClick(mockMenuInfo);

      expect(mockPush).toHaveBeenCalledWith(
        generateAlbumRedirectionPath(mockSongItem[EMusicTrackKeys.COLLECTION_ID]),
      );
    } else {
      fail('goToAlbumItem item not found in the menu');
    }
  });

  it('navigates to artist on go to artist click', () => {
    const { result } = renderUseSongContextMenu();

    const items = result.current as MenuItemType[];
    const goToArtistItem = items.find(({ label }) => label === GO_TO_ARTIST_ITEM_LABEL);

    if (goToArtistItem && goToArtistItem.onClick) {
      goToArtistItem.onClick(mockMenuInfo);

      expect(mockPush).toHaveBeenCalledWith(
        generateArtistRedirectionPath(mockSongItem[EMusicTrackKeys.ARTIST_ID]),
      );
    } else {
      fail('goToArtistItem item not found in the menu');
    }
  });
});
