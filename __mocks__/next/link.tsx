import React, { FC, PropsWithChildren } from 'react';

type TLinkMock = {
  href: string;
  passHref?: boolean;
  replace?: boolean;
};

const LinkMock: FC<PropsWithChildren<TLinkMock>> = ({ children, href, ...props }) => (
  <a href={href} {...props}>
    {children}
  </a>
);

LinkMock.displayName = 'Link';

export default LinkMock;
