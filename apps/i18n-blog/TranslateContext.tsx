import React, { createContext, useEffect, useState } from 'react';

type Translation = {
     [key: string]: any
}
export interface TranslateContextModel {
    translations: Translation;
    config: { locales: string[], current: string};
    changeLocale: (locale: string) => void;
  };
export const TranslateContext = createContext<TranslateContextModel>(undefined);

export const TranslateContextProvider = (props) => {
    const [translations, setTranslations] = useState({});
    const [config, setConfig] = useState(props.config);
    
    useEffect(() => { 
        load();
    }, [config])

    const load = () => {
            const messages =  require(`./i18n/messages.${config.current}.json`);
        setTranslations({...translations, [config.current]: messages});
    };

    const changeLocale = (locale: string) => {
        setConfig({...config, current: locale});
   };

    return (
        <TranslateContext.Provider value={{translations, config, changeLocale}}>
            { props.children }
        </TranslateContext.Provider>
    );
  }

  export default TranslateContextProvider;
