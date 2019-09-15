import * as React from 'react';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import ImageCard from '../image-card';
import Spinner from '../spinner';

import './image-board.css';
import * as actions from '../../redux/actions';

import * as types from './types';

class ImageBoard extends React.Component<types.IProps> {
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
            <h2 className="text-secondary text-center">
                Here is an Error, try to reload page, or make another search querry.
            </h2>
        );

        const endMessage = (
            <div className="alert alert-info py-3 text-center" role="alert">
                <h5 className="m-0">
                    No more images to load, try another search querry
                </h5>
            </div>
        );

        const images = imageList.map((item) => (
            <ImageCard imageProps={item} key={item.id} />
        ));

        return (
            <InfiniteScroll
                className="d-flex flex-column justify-content-center jumbotron container py-3"
                dataLength={imageList.length}
                next={this.requestPhotos}
                loader={hasError ? null : Spinner}
                hasMore={hasMoreImage}
                endMessage={endMessage}>
                <div className="row align-items-center justify-content-center image-board">
                    {images}
                    {hasError ? errorNode : null}
                </div>
            </InfiniteScroll>
        );
    }
}

const mapStateToProps = (state) => ({
    imageList: state.imageList,
    searchKey: state.searchKey,
    currentSearchPage: state.currentSearchPage,
    imagesToLoad: state.imagesToLoad,
    hasMoreImage: state.hasMoreImage,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
});

export default connect(
    mapStateToProps,
    actions,
)(ImageBoard);
