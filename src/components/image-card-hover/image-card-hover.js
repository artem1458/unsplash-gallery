import React, { Component } from 'react';

import './image-card-hover.css';

export default class ImageCardHover extends Component {
  render() {
    const { color, id, userName } = this.props;

    const author = (
      <h6 className="col-12 text-center text-light mt-1">Author: {userName}</h6>
    );
    const averagedColor = (
      <h6 className="col-12 text-center text-light mt-1">Color: {color}</h6>
    );

    const downloadBtn = (
      <a
        className="btn btn-success col-8 my-1"
        href={`https://unsplash.com/photos/${id}/download?force=true`}
        role="button">
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
  }
}
