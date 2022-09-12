import { useEffect, useState } from 'react';

function getWindowSize () {
  return {
    width: window.innerWidth,
    height: window.innerHeight
  };
}

export default function () {
  const [windowSize, setWindowSize] = useState(getWindowSize());

  const resizeHandler = () => {
    setWindowSize(getWindowSize());
  };

  useEffect(() => {
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, []);

  return windowSize;
}
