import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import reducers from './reducers';
import {Provider} from 'react-redux';

import Application from './components/Application';

import './index.css';


const store = createStore(reducers);
const app = (<Provider store={store}>
				<Application/>
			</Provider>);

ReactDOM.render(app, document.getElementById('root'));
