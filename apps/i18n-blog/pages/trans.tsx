import React, { useContext, useEffect, useState } from 'react';
import { translator } from '../translator';
import { TranslateContext } from '../TranslateContext';

/* eslint-disable-next-line */


export function TransUnit(props: any) {
  const [slot, setSlot] = useState(props.children);
  const { translations, config } = useContext(TranslateContext);

  useEffect(() => {
    translator(props, setSlot, translations, config);
  }, [translations]);

  return <>{slot}</>;
}

export default TransUnit;
