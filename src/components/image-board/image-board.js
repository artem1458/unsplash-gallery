import React, { Component } from 'react';

import ImageCard from '../image-card';

import './image-board.css';
import UnsplashService from '../../services/unsplash-service';

export default class ImageBoard extends Component {
  unsplash = new UnsplashService();

  state = {
    imageList: null,
  };

  componentDidMount() {
    this.updatePhotos();
  }

  updatePhotos = async (count) => {
    const imageList = await this.unsplash.getRandomPhotos(count);

    this.setState({ imageList });
  };

  render() {
    const { imageList } = this.state;

    if (!imageList) {
      return <div className="jumbotron image-board " />;
    }

    const imageItems = imageList.map((item) => {
      return <ImageCard imageProps={item} />;
    });

    return <div className="jumbotron image-board ">{imageItems}</div>;
  }
}
