import React from 'react';
import { TransUnit } from '@nx-plugins/i18n-react';
import { SimpleText } from '@plugins-examples/core';

/* eslint-disable-next-line */
export interface I18nCardProps {}

export function I18nCard(props: I18nCardProps) {
  return (
    <div>
      <TransUnit value={'paragraph|description@@@card'}>
        This is the card
      </TransUnit>
      <SimpleText />{' '}
    </div>
  );
}

export default I18nCard;
