import { TransUnit } from '@nx-plugins/i18n-react';
import React from 'react';

/* eslint-disable-next-line */
export interface PageATsxProps {}

export function PageATsx(props: PageATsxProps) {
  return (
    <div>
      <h1>Welcome to page-a.tsx!</h1>
      <TransUnit value={'paragraph|description@@@pageA'}>
        Text in page A
      </TransUnit>
    </div>
  );
}

export default PageATsx;
