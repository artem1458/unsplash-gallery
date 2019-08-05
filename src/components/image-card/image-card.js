import React from 'react';

import './image-card.css';

const ImageCard = (props) => {
  const {
    imageProps: { alt, urlSmall },
  } = props;

  const imageCardClassName =
    'image-card col-lg-4 col-md-6 col-sm-12 my-2 d-flex justify-content-center';

  return (
    <div className={imageCardClassName}>
      <img className="img-thumbnail rounded" src={urlSmall} alt={alt} />
    </div>
  );
};

export default ImageCard;
