import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import reducer from './redux/reducer';

import createSagaMiddleware from 'redux-saga'
import rootSaga from "@/redux/saga";

import App from './components/app';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(reducer, applyMiddleware(sagaMiddleware, thunk));

sagaMiddleware.run(rootSaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
