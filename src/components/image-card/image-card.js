import React, { Component } from 'react';

import './image-card.css';

export default class ImageCard extends Component {
  render() {
    const {
      imageProps: { alt, urlSmall },
    } = this.props;

    return (
      <div className="image-card">
        <img className="img-thumbnail rounded" src={urlSmall} alt={alt} />
      </div>
    );
  }
}
