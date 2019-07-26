import React from 'react';

import SearchPannel from '../search-pannel';

import './app.css';
import ImageBoard from '../image-board/image-board';

const App = () => {
  return (
    <div className="app">
      <SearchPannel />
      <ImageBoard />
    </div>
  );
};

export default App;
