import * as React from 'react';

import './image-card.css';
import ImageCardHover from '../image-card-hover';

import IImageItem from "@/components/types/image-item";


const ImageCard = (props: {
    imageProps: IImageItem,
}) => {
    const {
        imageProps: {alt, urlSmall, color, userName, id},
    } = props;

    const imageCardClassName =
        'image-card col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center p-0 m-2';

    return (
        <div className={imageCardClassName}>
            <img className="img-thumbnail rounded" src={urlSmall} alt={alt}/>
            <ImageCardHover color={color} userName={userName} id={id}/>
        </div>
    );
};

export default ImageCard;
