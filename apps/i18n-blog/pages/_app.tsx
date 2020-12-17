import React from 'react';
import { AppProps } from 'next/app';
import './styles.css';
import { TranslateContextProvider } from '@nx-plugins/i18n-react';

function CustomApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <TranslateContextProvider>
        <p> Hello </p>
      </TranslateContextProvider>
    </>
  );
}

export default CustomApp;
