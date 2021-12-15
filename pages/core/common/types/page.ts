import type { NextPage } from 'next';
import type { ReactNode } from 'react';

export type PageLayout = (page: ReactNode) => ReactNode;

// eslint-disable-next-line @typescript-eslint/ban-types
export type PageComponent<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: PageLayout;
};
