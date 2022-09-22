import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

import Home from './views/Home';
import Product from './views/Product';
import Cart from './views/Cart';
import Order from './views/Order';
import Result from './views/Result';
import E404 from './views/E404';
import CartCounters from './components/CartCounters';
import RouterView from './routes';

const App = () => {
  return <>
		<header>
			<div className="container mt-1">
				<div className="row justify-content-between">
					<div className="col">
						Logo
					</div>
					<CartCounters/>
				</div>
				<hr/>
			</div>
		</header>
		<div>
			<div className="container">
				<div className="row">
					<aside className="col col-3">
						<ul className="list-group">
							<li className="list-group-item"><Link to="/">Home</Link></li>
							<li className="list-group-item"><Link to="/cart">Cart</Link></li>
							<li className="list-group-item"><Link to="/order">Order</Link></li>
						</ul>

					</aside>
					<main className="col col-9">
						<RouterView />
					</main>
				</div>
			</div>
		</div>
		<footer className="mt-1">
			<hr/>
			<div className="container">2022</div>
		</footer>
	</>;
};

export default App;
