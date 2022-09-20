import React, { useRef } from 'react';
import PropTypes from 'prop-types';

function MinMaxLazy ({ min = 1, max, current, onChange }) {
  const inp = useRef();

  function onKeyPress (e) {
    if (e.keyCode === 13) {
      currentChange(e);
    }
  }

  function dec () {
    return applyCurrent(current - 1);
  }

  function inc () {
    return applyCurrent(current + 1);
  }

  function applyCurrent (num) {
    const validNum = Math.max(min, Math.min(max, num));
    inp.current.value = validNum;
    onChange(validNum);
  }

  function currentChange () {
    const num = parseInt(inp.current.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  return <div>
    <button type="button" onClick={ dec }>-</button>
    <input ref={inp} type="text" defaultValue={current} onBlur={currentChange} onKeyDown={onKeyPress}/>
    <button type="button" onClick={ inc }>+</button>
  </div>;
}

MinMaxLazy.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MinMaxLazy;
