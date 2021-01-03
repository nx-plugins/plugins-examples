import { Plural, TransUnit } from '@nx-plugins/i18n-react';
import React from 'react';

/* eslint-disable-next-line */
export interface I18nHeaderProps {}

export function I18nHeader(props: I18nHeaderProps) {
  return (
    <>
      <Plural value={'paragraph | description@@@header2'}>Este es nuevo</Plural>
      <TransUnit value={'paragraph | description@@@header1'}>
        This is the header1
      </TransUnit>
      <div>
        <div>
          <div>
            <p>
              <TransUnit value={'paragraph | description@@@ligia'}>
                This is the header
              </TransUnit>
              <Plural value={'paragraph | description@@@header3'}>
                Este es nuevo
              </Plural>
            </p>
          </div>
        </div>
      </div>
      <p>
        <TransUnit value={'paragraph | description@@@andrea'}>
          This is the header
        </TransUnit>
        <Plural value={'paragraph | description@@@header4'}>
          Este es nuevo
        </Plural>
      </p>
    </>
  );
}

export default I18nHeader;
