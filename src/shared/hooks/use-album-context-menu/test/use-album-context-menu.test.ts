import { renderHook } from '@testing-library/react-hooks';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';
import { useRouter } from 'next/navigation';

import { generateAlbumRedirectionPath } from '@/utils/generate-album-redirection-path';
import { generateShareAlbumUrl } from '@/utils/generate-share-album-url';

import { EAlbumKeys, TAlbum } from '@/types/album';

import { mockAlbum, mockMenuInfo } from '@/consts/mocks';

import { useAlbumContextMenu } from '../';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockPush = jest.fn();
const mockCopyToClipboard = jest.fn();

const SHARE_ITEM_LABEL = 'Share';
const GO_TO_ALBUM_ITEM_LABEL = 'Go to album';

const renderUseAlbumContextMenu = () =>
  renderHook(() =>
    useAlbumContextMenu({ album: mockAlbum as TAlbum, copytoClipboard: mockCopyToClipboard }),
  );

describe('useAlbumContextMenu', () => {
  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  it('creates menu items with correct labels', () => {
    const { result } = renderUseAlbumContextMenu();

    const items = result.current as MenuItemType[];
    expect(items[0].label).toBe(SHARE_ITEM_LABEL);
    expect(items[1].label).toBe(GO_TO_ALBUM_ITEM_LABEL);
  });

  it('calls copy to clipboard with share URL on share click', () => {
    const { result } = renderUseAlbumContextMenu();

    const items = result.current as MenuItemType[];
    const shareItem = items.find(({ label }) => label === SHARE_ITEM_LABEL);

    if (shareItem && shareItem.onClick) {
      shareItem.onClick(mockMenuInfo);

      expect(mockCopyToClipboard).toHaveBeenCalledWith(
        generateShareAlbumUrl(mockAlbum[EAlbumKeys.COLLECTION_ID]),
      );
    } else {
      fail('Share item not found in the menu');
    }
  });

  it('navigates to album on go to album click', () => {
    const { result } = renderUseAlbumContextMenu();

    const items = result.current as MenuItemType[];
    const goToAlbumItem = items.find(({ label }) => label === GO_TO_ALBUM_ITEM_LABEL);

    if (goToAlbumItem && goToAlbumItem.onClick) {
      goToAlbumItem.onClick(mockMenuInfo);

      expect(mockPush).toHaveBeenCalledWith(
        generateAlbumRedirectionPath(mockAlbum[EAlbumKeys.COLLECTION_ID]),
      );
    } else {
      fail('goToAlbumItem item not found in the menu');
    }
  });
});
