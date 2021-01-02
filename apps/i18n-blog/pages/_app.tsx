import React from 'react';
import { AppProps } from 'next/app';
import './styles.css';
import { Plural, TransUnit, TranslateContextProvider } from '@nx-plugins/i18n-react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Plural value={'paragraph | description@@@inboxPlural'}>
      Este es nuevo
    </Plural> */}
    
      <TranslateContextProvider>
      </TranslateContextProvider>
    </>
  );
}

export default CustomApp;
