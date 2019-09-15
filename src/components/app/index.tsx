import * as React from 'react';

import ImageBoard from '../image-board';
import ImageSearch from '../image-search';

import './app.css';

const App = () => {
    return (
        <div>
            <ImageSearch/>
            <ImageBoard/>
        </div>
    );
};

export default App;
