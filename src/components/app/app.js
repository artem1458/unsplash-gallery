import React from 'react';

import ImageSearch from '../image-search';

import './app.css';
import ImageBoard from '../image-board/image-board';

const App = () => {
  return (
    <div className="app">
      <ImageSearch />
      <ImageBoard />
    </div>
  );
};

export default App;
