import React from 'react';

import ImageSearch from '../image-search';
import ImageBoard from '../image-board/image-board';

import './app.css';

const App = () => {
  return (
    <div>
      <ImageSearch />
      <ImageBoard />
    </div>
  );
};

export default App;
