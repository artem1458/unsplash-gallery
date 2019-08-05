import React, { Component } from 'react';
import { connect } from 'react-redux';

import ImageCard from '../image-card';

import './image-board.css';
import * as actions from '../../redux/actions';

class ImageBoard extends Component {
  componentDidMount() {
    this.updatePhotos(6);
  }

  updatePhotos = async (count) => {
    this.props.getRandomPhotos(count);
  };

  render() {
    const { imageList } = this.props;

    if (!imageList) {
      return <div className="jumbotron image-board " />;
    }

    const images = imageList.map((item) => {
      return <ImageCard imageProps={item} key={item.id} />;
    });

    return (
      <div className="jumbotron image-board ">
        {images}
        <button
          type="button"
          onClick={() => {
            this.updatePhotos(6);
          }}>
          Тест
        </button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ imageList: state.imageList });

export default connect(
  mapStateToProps,
  actions,
)(ImageBoard);
