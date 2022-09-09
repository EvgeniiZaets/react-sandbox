import React, {useState} from "react";
import PropTypes from "prop-types";

function Counter({ min, max }) {
    let [current, setCurrent] = useState(1);

    function inc() {
        if (current < max) {
            setCurrent(current + 1);
        }
    }

    function dec() {
        if (current > min) {
            setCurrent(current - 1);
        }
    }

    return <div>
        <button type="button" onClick={ dec }>-</button>
        <span>{current}</span>
        <button type="button" onClick={ inc }>+</button>
    </div>
}

Counter.propTypes = {
    min: PropTypes.number.isRequired,
    max: PropTypes.number.isRequired,
}

export default Counter

