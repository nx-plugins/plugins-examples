import React from 'react';
import { TransUnit } from '@nx-plugins/i18n-react';
import { I18nFooter } from '@plugins-examples/i18n/footer';
import { I18nHeader } from '@plugins-examples/i18n/header';
import { I18nCard } from '@plugins-examples/i18n/card';

/* eslint-disable-next-line */
export interface PageBTsxProps {}

export function PageBTsx(props: PageBTsxProps) {
  return (
    <div>
      <h1>Welcome to page-b.tsx!</h1>
      <I18nHeader/>
      <TransUnit value={'paragraph|description@@@pageB'}>
        Text in page B
      </TransUnit>
      <I18nCard/>
      <I18nFooter/>
    </div>
  );
}

export default PageBTsx;
