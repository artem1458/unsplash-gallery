import * as React from 'react';

const Spinner = () => (
    <div className="d-flex justify-content-center py-3">
        <div className="spinner-grow text-primary" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-success" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-danger" role="status">
            <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-warning" role="status">
            <span className="sr-only">Loading...</span>
        </div>
    </div>
);

export default Spinner;