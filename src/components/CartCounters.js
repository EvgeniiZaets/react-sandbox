import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from './../hooks/useStore';

const CartCounters = observer(() => {
  const [cart] = useStore('cart');

  return <>
    <div className="col">
      In cart: { cart.cnt }
    </div>
    <div className="col">
      Total: { cart.total }
    </div>
  </>;
});

export default CartCounters;
