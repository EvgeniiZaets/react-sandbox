import React from 'react';

import { observer } from 'mobx-react-lite';
import useStore from './../hooks/useStore';

export default observer(function () {
  console.log('result');
  const [cart, order] = useStore('cart', 'order');

  return <div>
		<h1>{ order.data.name }, yout order is done!</h1>
		<hr/>
		<strong>Total: { cart.total }</strong>
	</div>;
});
