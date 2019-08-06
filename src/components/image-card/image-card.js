import React, { Fragment } from 'react';

import './image-card.css';
import ImageCardHover from '../image-card-hover';

const ImageCard = (props) => {
  const {
    imageProps: { alt, urlSmall, color, description, urlDownload, userName },
  } = props;

  const imageCardClassName =
    'image-card col-lg-4 col-md-6 col-sm-12 my-2 d-flex justify-content-center';

  return (
    <div className={imageCardClassName}>
      <img className="img-thumbnail rounded" src={urlSmall} alt={alt} />
      <ImageCardHover
        color={color}
        description={description}
        urlDownload={urlDownload}
        userName={userName}
      />
    </div>
  );
};

export default ImageCard;
