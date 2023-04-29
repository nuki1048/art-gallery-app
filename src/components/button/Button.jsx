import React from 'react';

import './Button.scss';

const Button = ({ text, callback, classes }) => {
  let clazz = '';
  if (classes) {
    // eslint-disable-next-line no-return-assign
    classes.map(item => (clazz += ` ${item}`));
  }
  return (
    <button className={clazz} type="button" onClick={callback}>
      {text}
    </button>
  );
};

export default Button;
