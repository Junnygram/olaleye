import Link from 'next/link';
import React, { ReactNode } from 'react';

interface DropdownLinkProps {
  href: string;
  children: ReactNode;
  [key: string]: any; // Additional props
}

export default function DropdownLink(props: DropdownLinkProps) {
  const { href, children, ...rest } = props;

  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  );
}
