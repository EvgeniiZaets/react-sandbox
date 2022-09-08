import React, {useState} from "react";

export default function({ max }) {
    let [current, setCurrent] = useState(1);

    function inc() {
        if (current < max) {
            setCurrent(current + 1);
        }
    }

    return <div>
        <span>{current}</span>
        <button type="button" onClick={ inc }>+</button>
    </div>
}

