import React from 'react';
import { TransUnit } from '@nx-plugins/i18n-react';
import { SimpleText } from '@plugins-examples/core';

/* eslint-disable-next-line */
export interface I18nFooterProps {}

export function I18nFooter(props: I18nFooterProps) {
  return (
    <div>
      <>
      <TransUnit value={'paragraph|description@@@footer'}>This is the footer</TransUnit>
      <SimpleText />
    </>
    </div>
  );
}

export default I18nFooter;
