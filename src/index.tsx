import * as React from 'react';
import * as ReactDOM from 'react-dom';

import {Provider} from 'react-redux';
import store from "src/redux/store";

import App from 'components/app';

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root'),
);
