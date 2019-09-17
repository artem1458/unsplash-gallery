import React from 'react';

import ImageBoard from 'components/image-board';
import ImageSearch from 'components/image-search';

import './app.css';

const App = () => {
	return (
		<React.Fragment>
			<ImageSearch />
			<ImageBoard />
		</React.Fragment>
	);
};

export default App;
