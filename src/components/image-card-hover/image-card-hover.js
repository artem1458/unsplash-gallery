import React, { Component } from 'react';

import './image-card-hover.css';

export default class ImageCardHover extends Component {
  render() {
    const { color, description, urlDownload, userName } = this.props;

    const author = (
      <h5 className="col-12 text-center text-light mt-2">Author:{userName}</h5>
    );
    const averagedColor = (
      <h5 className="col-12 text-center text-light mt-2">Color:{color}</h5>
    );

    const downloadBtn = (
      <a
        className="btn btn-primary"
        href={urlDownload}
        download="proposed_file_name"
        role="button">
        Download
      </a>
    );

    return (
      <div className="image-card-hover container rounded">
        <div className="row">
          {author}
          {averagedColor}
          {downloadBtn}
        </div>
      </div>
    );
  }
}
