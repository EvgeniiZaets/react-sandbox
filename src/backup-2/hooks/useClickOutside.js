import { useEffect } from 'react';

export default function (elemRef, onClickOutside) {
  const clickHandler = (e) => {
    // check if there was a click outside elemRef
    const isClickedOutside = e.composedPath().find(elem => elem.className === elemRef.current.className) === undefined;
    if (isClickedOutside) {
      onClickOutside();
    }
  };

  useEffect(() => {
    window.addEventListener('click', (e) => { clickHandler(e); });

    return () => {
      window.removeEventListener('click', (e) => { clickHandler(e); });
    };
  }, []);
}
