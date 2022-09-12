import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

function MinMaxLazyState ({ min = 1, max, current, onChange }) {
  const [inpVal, setInpVal] = useState(current);
  const onInput = e => setInpVal(e.target.value);

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
    setInpVal(validNum); // rerender component
    onChange(validNum);
  }

  function currentChange (e) {
    const num = parseInt(e.target.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  useEffect(() => {
    setInpVal(current); // rerender component
  }, [current]);

  return <div>
    <button type="button" onClick={ dec }>-</button>
    <input type="text" value={ inpVal } onChange={ onInput } onBlur={currentChange} onKeyDown={onKeyPress}/>
    <button type="button" onClick={ inc }>+</button>
  </div>;
}

MinMaxLazyState.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MinMaxLazyState;
