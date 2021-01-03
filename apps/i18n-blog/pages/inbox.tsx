import { TransUnit } from '@nx-plugins/i18n-react';
import { I18nHeader } from '@plugins-examples/i18n/header';
import React from 'react';

import './inbox.module.css';

/* eslint-disable-next-line */
export interface InboxProps {}

export function Inbox(props: InboxProps) {
  return (
    <>
    <p> Hola </p>
    <TransUnit value={'paragraph | description@@@sebitas'}>
        <p> Hey </p>
      </TransUnit>
      <TransUnit value={'paragraph | description@@@sebas'}>
        Hello Inbox 1
      </TransUnit>
      <I18nHeader></I18nHeader>  
    </>
  );
}

export default Inbox;
