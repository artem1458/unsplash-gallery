import * as React from 'react';

import ImageBoard from '../image-board';
import ImageSearch from '../image-search';

import './app.css';

const App = () => {
    return (
        <React.Fragment>
            <ImageSearch/>
            <ImageBoard/>
        </React.Fragment>
    );
};

export default App;
