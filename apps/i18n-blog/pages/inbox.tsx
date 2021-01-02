import { TransUnit } from '@nx-plugins/i18n-react';
import React from 'react';

import './inbox.module.css';

/* eslint-disable-next-line */
export interface InboxProps {}

export function Inbox(props: InboxProps) {
  return (
    <>
    <p> Hola </p>
    <TransUnit value={'paragraph | description@@@sebitas'}>
        Hello Inbox 4
      </TransUnit>
      <TransUnit value={'paragraph | description@@@sebas'}>
        Hello Inbox 1
      </TransUnit>
    </>
  );
}

export default Inbox;
