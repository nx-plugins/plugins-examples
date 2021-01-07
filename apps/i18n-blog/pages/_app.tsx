import React, { useContext } from 'react';
import { AppProps } from 'next/app';
import './styles.css';
import { TranslateContextProvider } from '../TranslateContext';
import { Inbox } from './inbox';

function CustomApp({ Component, pageProps }: AppProps) {
  const config = {
    locales: ["en","es"],
    current: "en"
  }
  return (
    <>
      {/* <Plural value={'paragraph | description@@@inboxPlural'}>
      Este es nuevo
    </Plural> */}
    
      <TranslateContextProvider config={config}>
        <Inbox/>
      </TranslateContextProvider>
    </>
  );
}

export default CustomApp;
