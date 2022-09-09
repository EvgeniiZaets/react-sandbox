import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Counter ({ min, max }) {
  const [current, setCurrent] = useState(min);

  function dec () {
    return applyCurrent(current - 1);
  }

  function inc () {
    return applyCurrent(current + 1);
  }

  function applyCurrent (num) {
    // if (num <= max && num >= min) {
    //     setCurrent(num);
    // }
    const validNum = Math.max(min, Math.min(max, num));
    setCurrent(validNum);
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

Counter.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired
};

export default Counter;
