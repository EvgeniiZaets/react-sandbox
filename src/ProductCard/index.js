import React from 'react';

import style from './style.module.scss';
import useWindowSize from '../hooks/useWindowSize';

export default function ProductCard () {
  const { width } = useWindowSize();

  const paddingSize = Math.min(parseInt(width / 200), 5);
  const classNames = `card ${style[`p-${paddingSize}`]}`;

  return <div className={classNames}>
    <h2>ProductCard</h2>
    <input type="text" className={style.inp}/>
  </div>;
}
