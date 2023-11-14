import React from 'react';

type LinkProps = {
  children: React.ReactElement;
  href: string;
  passHref?: boolean;
  replace?: boolean;
};

const LinkMock = ({ children, href, ...props }: LinkProps) => (
  <a href={href} {...props}>
    {children}
  </a>
);

LinkMock.displayName = 'Link';

export default LinkMock;
