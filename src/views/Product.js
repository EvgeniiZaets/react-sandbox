import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link, useParams } from 'react-router-dom';
export default observer(Product);

function Product () {
  const params = useParams();
  console.log(params);
  // params.id -> store.products get by id

  return <div>
		<h1>1</h1>
		<hr/>

	</div>;
}
