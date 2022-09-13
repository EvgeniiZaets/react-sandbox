import React, { useRef } from 'react';

import style from './style.module.scss';
import useClickOutside from '../hooks/useClickOutside';

export default function Modal () {
  const modal = useRef();
  useClickOutside(modal, () => {
    console.log('action on click outside');
  });

  return <div ref={modal} className={style.modal}>
    <h2>Modal</h2>
  </div>;
}
