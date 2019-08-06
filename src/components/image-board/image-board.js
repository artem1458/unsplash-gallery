import React, { Component } from 'react';
import { connect } from 'react-redux';
import InfiniteScroll from 'react-infinite-scroll-component';

import ImageCard from '../image-card';

import './image-board.css';
import * as actions from '../../redux/actions';

class ImageBoard extends Component {
  componentDidMount() {
    this.requestPhotos();
  }

  requestPhotos = () => {
    const { searchKey, currentSearchPage, imagesToLoad } = this.props;

    if (searchKey) {
      this.props.requestNextSearchPage([
        searchKey,
        currentSearchPage + 1,
        imagesToLoad,
      ]);
    } else {
      this.props.getRandomPhotos(imagesToLoad);
    }
  };

  render() {
    const { imageList, hasError } = this.props;

    const errorNode = (
      <h2 className="text-secondary text-center">
        Here is an Error, try to reload page, or make another search querry.
      </h2>
    );

    const spinner = (
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

    const endMessage = (
      <div className="alert alert-info py-3 text-center" role="alert">
        That's All Folks
      </div>
    );

    const images = imageList.map((item) => {
      return <ImageCard imageProps={item} key={item.id} />;
    });

    return (
      <InfiniteScroll
        className="d-flex flex-column justify-content-center jumbotron container py-3"
        dataLength={imageList.length}
        next={this.requestPhotos}
        loader={hasError ? null : spinner}
        hasMore={this.props.hasMoreImage}
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
