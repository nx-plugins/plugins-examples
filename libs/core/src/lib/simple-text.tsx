import React from 'react';

import './simple-text.module.css';

/* eslint-disable-next-line */
export interface SimpleTextProps {}

export function SimpleText(props: SimpleTextProps) {
  return (
    <div>
      <h1>Welcome to simple-text!</h1>
    </div>
  );
}

export default SimpleText;
