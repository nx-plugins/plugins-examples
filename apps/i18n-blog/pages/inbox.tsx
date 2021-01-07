import { TransUnit } from './trans';
import { I18nHeader } from '@plugins-examples/i18n/header';
import React, { useContext } from 'react';
import { TranslateContext } from '../TranslateContext';

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
      <p>
        <TransUnit value={'paragraph|description@@@sebas'}>
          Hello Inbox 1
        </TransUnit>
      </p>
      {/* <I18nHeader></I18nHeader> */}
    </>
  );
}

export default Inbox;
