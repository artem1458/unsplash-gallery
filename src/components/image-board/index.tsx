import * as React from 'react';
import { connect } from 'react-redux';

import InfiniteScroll from 'react-infinite-scroll-component';

import ImageCard from '../image-card';
import Spinner from '../spinner';

import './image-board.css';
import * as actions from '../../redux/actions';

interface IImageItem {
    alt: string,
    urlSmall: string,
    color: string,
    userName: string,
    id: string
}

interface IRequestNextSearchPageArgTuple extends Array<number | string> {
    0: string;
    1: number;
    2: number;
    length: 3; // это литеральный тип '2', это не значение!
}

interface IProps {
    searchKey: string,
    currentSearchPage: number,
    imagesToLoad: number,
    requestNextSearchPage: (IRequestNextSearchPageArgTuple)=> null,
    getRandomPhotos: (arg0: number) => void,
    imageList: IImageItem[],
    hasError: boolean,
    hasMoreImage: boolean
}

class ImageBoard extends React.Component<IProps> {
    componentDidMount() {
        this.requestPhotos();
    }

    requestPhotos = () => {
        const {
            searchKey,
            currentSearchPage,
            imagesToLoad,
            requestNextSearchPage,
            getRandomPhotos,
        } = this.props;

        if (searchKey) {
            requestNextSearchPage([searchKey, currentSearchPage + 1, imagesToLoad]);
        } else {
            getRandomPhotos(imagesToLoad);
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
