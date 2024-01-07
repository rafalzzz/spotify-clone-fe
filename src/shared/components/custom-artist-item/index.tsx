import Link from 'next/link';
import { FC } from 'react';

import { useNotificationContext } from '@/contexts/notification-context';

import { useArtistContextMenu } from '@/hooks/use-artist-context-menu';
import { useCopyToClipboard } from '@/hooks/use-copy-to-clipboard';

import { generateArtistRedirectionPath } from '@/utils/generate-artist-redirection-path';

import { TCustomArtistSection } from '@/types/components';

import { CustomContextMenu } from '../custom-context-menu';

import './CustomSectionItem.scss';

export const CustomArtistItem: FC<TCustomArtistSection> = ({
  artistName,
  artistId,
}): JSX.Element => {
  const { api } = useNotificationContext();
  const copytoClipboard = useCopyToClipboard(api);
  const items = useArtistContextMenu({ artistId, copytoClipboard });

  return (
    <CustomContextMenu items={items}>
      <Link
        href={generateArtistRedirectionPath(artistId)}
        className='custom-artist-item'
        data-testid='custom-artist-item-redirection'
      >
        <div className='custom-artist-item__wrapper'>
          <div>{artistName}</div>
        </div>
      </Link>
    </CustomContextMenu>
  );
};
