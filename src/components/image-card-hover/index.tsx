import React from 'react';
import './image-card-hover.css';

import IProps from './types';

const ImageCardHover = (props: IProps) => {
	const { color, id, userName } = props;

	const author = (
		<h6 className="col-12 text-center text-light mt-1 author">
			Author:{' '}
			<a
				className="font-weight-bold text-light author-link"
				href={`https://unsplash.com/@${userName}`}
				target="_blank"
				rel="noopener noreferrer"
			>
				{userName}
			</a>
		</h6>
	);
	const averagedColor = (
		<h6 className="col-12 text-center text-light mt-1 averaged-color">
			Color: {color}
		</h6>
	);

	const downloadBtn = (
		<a
			className="btn btn-success col-8 my-1 download-bnt"
			href={`https://unsplash.com/photos/${id}/download?force=true`}
			role="button"
		>
			Download
		</a>
	);

	return (
		<div className="image-card-hover rounded d-flex align-items-end">
			<div className="bg-info rounded d-flex flex-wrap justify-content-center w-100 h-60">
				{author}
				{averagedColor}
				{downloadBtn}
			</div>
		</div>
	);
};

export default ImageCardHover;
