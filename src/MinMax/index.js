import React, { useRef, useEffect, useContext } from 'react';
import propTypes from './props';

import style from './style.module.scss';

MinMaxLazy.propTypes = propTypes;

function MinMaxLazy ({ min = 1, max, current, onChange }) {
  const inp = useRef();

  function onKeyPress (e) {
    if (e.key === 'Enter') {
      parseCurrentStr(e);
    }
  }

  function parseCurrentStr () {
    const num = parseInt(inp.current.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  function applyCurrent (num) {
    const validNum = Math.max(min, Math.min(max, num));
    inp.current.value = validNum;
    onChange(validNum);
  }

  const inc = () => applyCurrent(current + 1);
  const dec = () => applyCurrent(current - 1);

  useEffect(() => {
    inp.current.value = current;
  }, [current]);

  return <div>
		<button className="btn btn-warning" type="button" onClick={ dec }>-</button>
		<input
			ref={inp}
			type="text"
			className={style.inp}
			defaultValue={current}
			onBlur={parseCurrentStr}
			onKeyPress={onKeyPress}
		/>
		<button className="btn btn-success" type="button" onClick={ inc }>+</button>
	</div>;
}

export default MinMaxLazy;
