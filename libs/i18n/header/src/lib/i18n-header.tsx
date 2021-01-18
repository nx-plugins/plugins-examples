import React from 'react';
import { TransUnit } from '@nx-plugins/i18n-react';
import { SimpleText } from '@plugins-examples/core';
/* eslint-disable-next-line */
export interface I18nHeaderProps {}

export function I18nHeader(props: I18nHeaderProps) {
  return (
    <>
      <TransUnit value={'paragraph|description@@@header'}>This is the header</TransUnit>
      <SimpleText />
    </>
  );
}

export default I18nHeader;
