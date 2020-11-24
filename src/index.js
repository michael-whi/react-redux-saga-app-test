// Needed for redux-saga es6 generator support
import '@babel/polyfill';

import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import history from 'utils/history';
import {IntlProvider} from 'react-intl';

import configureStore from './store/';

import App from 'containers/App';


const initialState = {};
const store = configureStore(initialState, history);


ReactDom.render(
    (<Provider store={store}>
        <ConnectedRouter history={history}>
          <IntlProvider locale="en">
            <App />
          </IntlProvider>
        </ConnectedRouter>
    </Provider>),
    document.getElementById('root')
);