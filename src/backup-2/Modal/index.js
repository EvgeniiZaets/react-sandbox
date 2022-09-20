import React, { useRef } from 'react';

import style from './style.module.scss';
import useClickOutside from '../hooks/useClickOutside';

// eslint-disable-next-line react/prop-types
export default function Modal ({ children }) {
  const modal = useRef();
  useClickOutside(modal, () => {
    console.log('action on click outside');
  });

  const content = !children
    ? null
    : <>
    { children }
    <hr/>
  </>;

  return <div ref={modal} className={style.modal}>
    <h2>Modal</h2>
    { content }
  </div>;
}
