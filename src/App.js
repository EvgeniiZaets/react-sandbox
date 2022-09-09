import React, { useState } from 'react';
import Counter from './Counter';

export default function App () {
  const [maxTest, setMaxTest] = useState(10);
  const setMaxTest5 = () => setMaxTest(5);

  return <div>
        <Counter min={2} max={maxTest}/>
        <hr/>
        <button type="button" onClick={setMaxTest5}>set max 5</button>
    </div>;
}
