import { Plural, TransUnit } from '@nx-plugins/i18n-react';
import React, { useState } from 'react';
import { I18nHeader } from '@plugins-examples/i18n/header';

import './inbox.module.css';

/* eslint-disable-next-line */
export interface InboxProps {}

export function Inbox(props: InboxProps) {
  const [count, setCount] = useState(0);
  const user = 'name';
  return (
    <>
      <p> Hola </p>
      <TransUnit value={'paragraph|description@@@sebitas'}>
      We invited <strong>{user}<p>Hello, you are <span>Sebas </span> </p></strong>.
      </TransUnit>
      <br />
      {/* <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <br />
      <Plural value={'paragraph | description@@@sebas'} count={count}>
        Este es nuevo
      </Plural>
       */}
       <I18nHeader></I18nHeader>
    </>
  );
}

export default Inbox;
