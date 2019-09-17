import React from 'react';

const Spinner = () => (
	<div className="d-flex justify-content-center py-3 spinner">
		<div className="spinner-grow text-primary spinner-dot" role="status" />
		<div className="spinner-grow text-success spinner-dot" role="status" />
		<div className="spinner-grow text-danger spinner-dot" role="status" />
		<div className="spinner-grow text-warning spinner-dot" role="status" />
	</div>
);

export default Spinner;
