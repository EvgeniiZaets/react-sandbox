import React from 'react';
import PropTypes from 'prop-types';

// todo
function MinMax ({ min = 1, max, current, onChange }) {
  function dec () {
    return applyCurrent(current - 1);
  }

  function inc () {
    return applyCurrent(current + 1);
  }

  function applyCurrent (num) {
    const validNum = Math.max(min, Math.min(max, num));
    onChange(validNum);
  }

  function currentChange (e) {
    const num = parseInt(e.target.value);
    applyCurrent(isNaN(num) ? min : num);
  }

  return <div>
    <button type="button" onClick={ dec }>-</button>
    <input type="text" value={current} onChange={ currentChange }/>
    <button type="button" onClick={ inc }>+</button>
  </div>;
}

MinMax.propTypes = {
  min: PropTypes.number,
  max: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onChange: PropTypes.func.isRequired
};

export default MinMax;