import React from 'react';

import style from './style.module.scss';

export default function ProductCard () {
  return <div className="card">
    <h2>ProductCard</h2>
    <input type="text" className={style.inp}/>
  </div>;
}
