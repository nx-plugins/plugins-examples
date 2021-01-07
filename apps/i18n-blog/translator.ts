import React from 'react';

export interface TransProps {
  value: any;
  children: any
}

function getTranslatableContent(value: string) {
  const meaningSeparator = value.indexOf('|');
  const customIdSeparator = value.indexOf('@@@');

  // TODO: Validate scenarios with just id
  return {
    meaning: value.slice(0, meaningSeparator).trim(),
    description: value.slice(meaningSeparator + 1, customIdSeparator).trim(),
    id: value.slice(customIdSeparator + 3).trim(),

  }
}

export function getMessageById(id: string, translations, config) {
  if (Object.keys(translations).length > 0) {
    return translations[config.current][id];
  }
  return "Not found";
}

export function translator(props: TransProps, setSlot, translations, config) {
  let { id } = getTranslatableContent(props.value);
  const message = getMessageById(id, translations, config);
  const element = React.createElement(React.Fragment, {
    children: message.target,
  });
  setSlot(element);
}
