import { renderHook } from '@testing-library/react-hooks';
import { MenuItemType } from 'antd/es/menu/hooks/useItems';

import { generateShareArtistUrl } from '@/utils/generate-share-artist-url';

import { mockMenuInfo } from '@/consts/mocks';

import { useArtistContextMenu } from '..';

jest.mock('next/navigation', () => ({
  useRouter: jest.fn(),
}));

const mockCopyToClipboard = jest.fn();

const ARTIST_ID_MOCK = 1;
const SHARE_ITEM_LABEL = 'Share';

const renderUseArtistContextMenu = () =>
  renderHook(() =>
    useArtistContextMenu({ artistId: ARTIST_ID_MOCK, copytoClipboard: mockCopyToClipboard }),
  );

describe('useArtistContextMenu', () => {
  it('creates menu items with correct labels', () => {
    const { result } = renderUseArtistContextMenu();

    const items = result.current as MenuItemType[];
    expect(items[0].label).toBe(SHARE_ITEM_LABEL);
  });

  it('calls copy to clipboard with share URL on share click', () => {
    const { result } = renderUseArtistContextMenu();

    const items = result.current as MenuItemType[];
    const shareItem = items.find(({ label }) => label === SHARE_ITEM_LABEL);

    if (shareItem && shareItem.onClick) {
      shareItem.onClick(mockMenuInfo);
      expect(mockCopyToClipboard).toHaveBeenCalledWith(generateShareArtistUrl(ARTIST_ID_MOCK));
    } else {
      fail('Share item not found in the menu');
    }
  });
});
