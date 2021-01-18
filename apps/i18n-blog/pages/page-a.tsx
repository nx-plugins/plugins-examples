import React from 'react';
import { TransUnit } from '@nx-plugins/i18n-react';
import { I18nFooter } from '@plugins-examples/i18n/footer';
import { I18nHeader } from '@plugins-examples/i18n/header';

/* eslint-disable-next-line */
export interface PageAProps {}

export function PageA(props: PageAProps) {
  return (
    <div>
      <I18nHeader/>  
      <TransUnit value={'paragraph|description@@@pageA'}>
        Text in page A
      </TransUnit>
      <I18nFooter/>
    </div>
  );
}

export default PageA;
