import React from 'react';

import useStore from '../hooks/useStore';
import { observer } from 'mobx-react-lite';

import { Link } from 'react-router-dom';

export default observer(Home);

function Home () {
  const [productsStore, cartStore] = useStore('products', 'cart');
  const { products } = productsStore;

  const actionBtn = (id) => {
    if (cartStore.inCart(id)) {
      return <button type="button" className="btn btn-info" onClick={ () => cartStore.remove(id) } disabled={ cartStore.inProcess(id) }>Rm from cart</button>;
    } else {
      return <button type="button" className="btn btn-success" onClick={ () => cartStore.add(id) } disabled={ cartStore.inProcess(id) }>Add to cart</button>;
    }
  };

  return <div>
		<h1>Catalog</h1>
		<hr/>
		<div className="row">
		{ products.map((pr) => (
			<div className="col col-4 mb-3 mt-3" key={pr.id}>
				<div className="card">
					<div className="card-body">
						<h3>{ pr.title }</h3>
						<div>{ pr.price }</div>
						<Link to={`/product/${pr.id}`}>Read more</Link>
						{ actionBtn(pr.id) }
					</div>
				</div>
			</div>
		)) }
		</div>
	</div>;
}
