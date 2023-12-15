import Link from 'next/link';
import { FC } from 'react';

import { TCustomHyperlink } from '@/types/components';

import './CustomHyperlink.scss';

export const CustomHyperlink: FC<TCustomHyperlink> = ({
  textBeforeHyperlink,
  href,
  hyperlinkText = '',
  textAfterHyperlink = '',
  className = '',
}): JSX.Element => (
  <div className={`custom-hyperlink ${className}`} data-testid='custom-hyperlink'>
    <span className={`${className}__text-before`}>{textBeforeHyperlink}</span>
    <Link
      href={href}
      className={`${className}__hyperlink`}
      data-testid='custom-hyperlink__hyperlink'
    >
      {hyperlinkText}
    </Link>
    <span className={`${className}__text-after`}>{textAfterHyperlink}</span>
  </div>
);
