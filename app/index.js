import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store';

import { BrowserRouter } from 'react-router-dom';

import App from './components/App'

const app = document.getElementById('app');

const render = (App) => {
	ReactDOM.render(
		<Provider store = {store}>
			<BrowserRouter>
				<App />
			</BrowserRouter>
		</Provider>,
		app
	);
};

render(App);
