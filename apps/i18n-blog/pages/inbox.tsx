import { TransUnit } from '@nx-plugins/i18n-react-ui';
import React from 'react';

import './inbox.module.css';

/* eslint-disable-next-line */
export interface InboxProps {}

export function Inbox(props: InboxProps) {
  return (
    <>
      <p> Hola </p>
      <TransUnit value={'paragraph|description@@@sebitas'}>
        <span>
          <p> saa</p>
        </span>
      </TransUnit>
      {/* <p>
        Aqui
        <TransUnit value={'paragraph|description@@@sebas'}>
          Hello Inbox 1
        </TransUnit>
      </p> */}
      {/* <I18nHeader></I18nHeader> */}
    </>
  );
}

export default Inbox;
