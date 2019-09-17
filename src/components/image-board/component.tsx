import React from 'react';
import * as types from 'src/components/image-board/types';
import ImageCard from 'src/components/image-card';
import InfiniteScroll from 'react-infinite-scroll-component';
import Spinner from 'src/components/spinner';

export default class ImageBoard extends React.Component<types.IProps> {
	componentDidMount() {
		this.requestPhotos();
	}

	requestPhotos = () => {
		const {
			searchKey,
			requestNextSearchPage,
			getRandomPhotos,
		} = this.props;

		if (searchKey) {
			requestNextSearchPage();
		} else {
			getRandomPhotos();
		}
	};

	render() {
		const { imageList, hasError, hasMoreImage } = this.props;

		const errorNode = (
			<h2 className="text-secondary text-center error-message">
				Here is an Error, try to reload page, or make another search
				querry.
			</h2>
		);

		const endMessage = (
			<div
				className="alert alert-info py-3 text-center end-message"
				role="alert"
			>
				<h5 className="m-0">
					No more images to load, try another search querry
				</h5>
			</div>
		);

		const images = imageList.map(item => (
			<ImageCard imageProps={item} key={item.id} />
		));

		return (
			<InfiniteScroll
				className="d-flex flex-column justify-content-center jumbotron container py-3"
				dataLength={imageList.length}
				next={this.requestPhotos}
				loader={hasError ? null : <Spinner />}
				hasMore={hasMoreImage}
				endMessage={endMessage}
			>
				<div className="row align-items-center justify-content-center image-board">
					{images}
					{hasError ? errorNode : null}
				</div>
			</InfiniteScroll>
		);
	}
}
