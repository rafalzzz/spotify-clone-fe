import Link from 'next/link';

import './CustomHyperlink.scss';

type TCustomHyperlink = {
  href: string;
  hyperlinkText: string;
  textBeforeHyperlink?: string;
  textAfterHyperlink?: string;
  className?: string;
};

export const CustomHyperlink = ({
  textBeforeHyperlink,
  href,
  hyperlinkText = '',
  textAfterHyperlink = '',
  className = '',
}: TCustomHyperlink) => (
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
