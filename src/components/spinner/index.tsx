import * as React from 'react';

const Spinner = () => (
    <div className="d-flex justify-content-center py-3">
        <div className="spinner-grow text-primary" role="status">
        </div>
        <div className="spinner-grow text-success" role="status">
        </div>
        <div className="spinner-grow text-danger" role="status">
        </div>
        <div className="spinner-grow text-warning" role="status">
        </div>
    </div>
);

export default Spinner;