/* import './tests/store-cart' */

import React from 'react';
import ReactDom from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import 'bootstrap/scss/bootstrap.scss';

import App from './App';
import StoreContext from './contexts/store';
import RootStore from './store';

const store = new RootStore();

const root = ReactDom.createRoot(document.querySelector('.app'));
root.render(
	<BrowserRouter>
		<StoreContext.Provider value={store}>
			<App/>
		</StoreContext.Provider>
	</BrowserRouter>
);
