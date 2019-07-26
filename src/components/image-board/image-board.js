import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageCard from '../image-card';

import './image-board.css';
import UnsplashService from '../../services/unsplash-service';
import DummyUnsplashService from '../../services/dummy-unsplash-service';
import * as actions from '../../redux/actions';

class ImageBoard extends Component {
  unsplash = new DummyUnsplashService();

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos = async (count = 6) => {
    const imageList = await this.unsplash.getRandomPhotos(count);
    this.props.add(imageList);
  };

  render() {
    const { imageList } = this.props;

    if (!imageList) {
      return <div className="jumbotron image-board " />;
    }

    const imageItems = imageList.map((item) => {
      return <ImageCard imageProps={item} key={item.id} />;
    });

    return (
      <div className="jumbotron image-board ">
        {imageItems}
        <button
          type="button"
          onClick={() => {
            this.updatePhotos();
          }}>
          Тест
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ imageList: state });

export default connect(
  mapStateToProps,
  actions,
)(ImageBoard);
